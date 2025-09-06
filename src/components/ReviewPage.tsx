import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { StarRating } from "./StarRating";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Share2, Bookmark, Heart, MapPin, Clock, ChefHat } from "lucide-react";
import { reviews, restaurants } from "../data/mockData";
import { useNavigation } from "./Navigation";

interface ReviewPageProps {
  reviewId: string;
}

export function ReviewPage({ reviewId }: ReviewPageProps) {
  const { navigate } = useNavigation();
  const review = reviews.find(r => r.id === reviewId) || reviews[0];
  const restaurant = restaurants.find(r => r.id === review.restaurantId);
  const suggestedReviews = reviews.filter(r => r.id !== review.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white pb-8">
      {/* Hero Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={review.image}
          alt={review.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Share buttons floating */}
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
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="px-4 space-y-6 -mt-6 relative z-10">
        {/* Main content card */}
        <Card className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          {/* Restaurant badge and title */}
          <div className="space-y-3">
            <Badge className="bg-primary text-white px-3 py-1">
              {review.restaurantName}
            </Badge>
            <h1 className="font-serif text-2xl font-semibold text-gray-900 leading-tight">
              {review.title}
            </h1>
          </div>

          {/* Rating section */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <p className="text-sm text-gray-600 mb-1">Valoración general</p>
              <StarRating rating={review.rating} size="lg" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{review.rating}</div>
              <div className="text-sm text-gray-500">sobre 5</div>
            </div>
          </div>

          {/* Author and date */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-medium">
                  {review.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{review.author}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(review.date).toLocaleDateString('es-ES', { 
                    day: 'numeric', 
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Restaurant info */}
        {restaurant && (
          <Card 
            className="p-4 cursor-pointer hover:shadow-md transition-all duration-200 rounded-2xl"
            onClick={() => navigate("restaurant", { restaurantId: restaurant.id })}
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-gray-900">{restaurant.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{restaurant.address}</span>
                  </div>
                  <span className="text-primary font-semibold">{restaurant.priceRange}</span>
                </div>
              </div>
              <div className="text-right">
                <StarRating rating={restaurant.rating} size="sm" />
                <p className="text-xs text-gray-500 mt-1">({restaurant.reviewCount} reseñas)</p>
              </div>
            </div>
          </Card>
        )}

        {/* Review content */}
        <Card className="p-6 rounded-2xl space-y-6">
          <h2 className="font-serif text-xl font-semibold text-gray-900">Mi experiencia</h2>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-base">
              {review.content}
            </p>
          </div>

          {/* Recommended dishes */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-gray-900 flex items-center">
              <ChefHat className="w-5 h-5 mr-2 text-primary" />
              Platos recomendados
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-medium text-gray-900">Risotto de setas</span>
                <StarRating rating={5} size="sm" />
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-medium text-gray-900">Tarta de chocolate</span>
                <StarRating rating={4} size="sm" />
              </div>
            </div>
          </div>

          {/* Quick info */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-gray-900">Información útil</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-600">💰 Precio por persona</span>
                <span className="font-semibold text-gray-900">€35-45</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-600">🕒 Mejor momento</span>
                <span className="font-semibold text-gray-900">Cena, fines de semana</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-600">👥 Ideal para</span>
                <span className="font-semibold text-gray-900">Parejas, amigos</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Action buttons */}
        <div className="flex space-x-3">
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full py-3">
            <Heart className="w-4 h-4 mr-2" />
            Me gusta
          </Button>
          <Button variant="outline" className="flex-1 border-gray-200 rounded-full py-3">
            <Share2 className="w-4 h-4 mr-2" />
            Compartir
          </Button>
        </div>

        {/* Suggested reviews */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-semibold text-gray-900">Reseñas similares</h2>
          <div className="space-y-3">
            {suggestedReviews.map((suggestedReview) => (
              <Card 
                key={suggestedReview.id}
                className="cursor-pointer hover:shadow-md transition-all duration-200 rounded-2xl"
                onClick={() => navigate("review", { reviewId: suggestedReview.id })}
              >
                <div className="flex space-x-4 p-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={suggestedReview.image}
                      alt={suggestedReview.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {suggestedReview.restaurantName}
                      </Badge>
                      <StarRating rating={suggestedReview.rating} size="sm" />
                    </div>
                    <h3 className="font-serif font-medium leading-tight line-clamp-2 text-gray-900">
                      {suggestedReview.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Por {suggestedReview.author}
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