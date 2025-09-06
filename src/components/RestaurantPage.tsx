import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { StarRating } from "./StarRating";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Clock, Phone, ExternalLink, Share2, Heart } from "lucide-react";
import { restaurants, reviews } from "../data/mockData";
import { useNavigation } from "./Navigation";

interface RestaurantPageProps {
  restaurantId: string;
}

export function RestaurantPage({ restaurantId }: RestaurantPageProps) {
  const { navigate } = useNavigation();
  const restaurant = restaurants.find(r => r.id === restaurantId);
  const restaurantReviews = reviews.filter(r => r.restaurantId === restaurantId);
  
  if (!restaurant) {
    return (
      <div className="min-h-screen bg-white p-4 flex items-center justify-center">
        <p className="text-gray-600">Restaurante no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-8">
      {/* Hero Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button 
            size="icon"
            className="w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-sm"
          >
            <Share2 className="w-4 h-4" />
          </Button>
          <Button 
            size="icon"
            className="w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-sm"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="px-4 space-y-6 -mt-6 relative z-10">
        {/* Main restaurant card */}
        <Card className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="font-serif text-2xl font-semibold text-gray-900 mb-2">
                  {restaurant.name}
                </h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    {restaurant.cuisine}
                  </Badge>
                  <span className="text-primary font-semibold">{restaurant.priceRange}</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm text-gray-600 mb-1">Valoración media</p>
                <StarRating rating={restaurant.rating} size="lg" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{restaurant.rating}</div>
                <div className="text-sm text-gray-500">({restaurant.reviewCount} reseñas)</div>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{restaurant.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm">{restaurant.openHours}</span>
              </div>
              {restaurant.phone && (
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">{restaurant.phone}</span>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Gallery */}
        <Card className="p-6 rounded-2xl space-y-4">
          <h2 className="font-serif text-xl font-semibold text-gray-900">Galería</h2>
          <div className="grid grid-cols-2 gap-3">
            {restaurant.gallery.slice(0, 4).map((image, index) => (
              <div 
                key={index} 
                className={`aspect-square rounded-xl overflow-hidden ${index === 0 ? 'col-span-2' : ''}`}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${restaurant.name} - Imagen ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Description */}
        <Card className="p-6 rounded-2xl space-y-4">
          <h2 className="font-serif text-xl font-semibold text-gray-900">Sobre este lugar</h2>
          <p className="text-gray-700 leading-relaxed">
            {restaurant.description}
          </p>
        </Card>

        {/* Action buttons */}
        <div className="flex space-x-3">
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full py-3">
            Hacer reserva
          </Button>
          {restaurant.website && (
            <Button variant="outline" className="flex-1 border-gray-200 rounded-full py-3">
              <ExternalLink className="w-4 h-4 mr-2" />
              Web
            </Button>
          )}
        </div>

        {/* Reviews */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl font-semibold text-gray-900">
              Reseñas ({restaurantReviews.length})
            </h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Ver todas
            </Button>
          </div>
          
          <div className="space-y-3">
            {restaurantReviews.slice(0, 3).map((review) => (
              <Card 
                key={review.id}
                className="cursor-pointer hover:shadow-md transition-all duration-200 rounded-2xl"
                onClick={() => navigate("review", { reviewId: review.id })}
              >
                <div className="flex space-x-4 p-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={review.image}
                      alt={review.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {review.author.charAt(0)}
                          </span>
                        </div>
                        <span className="font-medium text-gray-900">{review.author}</span>
                      </div>
                      <StarRating rating={review.rating} size="sm" />
                    </div>
                    <h3 className="font-serif font-medium leading-tight line-clamp-2 text-gray-900">
                      {review.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {review.content}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}