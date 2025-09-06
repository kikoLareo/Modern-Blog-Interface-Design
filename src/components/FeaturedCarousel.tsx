import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { StarRating } from "./StarRating";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Heart } from "lucide-react";
import { reviews } from "../data/mockData";
import { useNavigation } from "./Navigation";

export function FeaturedCarousel() {
  const { navigate } = useNavigation();
  const featuredReviews = reviews.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="px-4">
        <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-2">
          Reseñas destacadas
        </h2>
        <p className="text-gray-600">Lo mejor de esta semana</p>
      </div>

      {/* Carousel */}
      <div className="flex overflow-x-auto space-x-4 px-4 pb-2 snap-x snap-mandatory scrollbar-hide">
        {featuredReviews.map((review, index) => (
          <Card 
            key={review.id} 
            className="min-w-[320px] snap-start cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden"
            onClick={() => navigate("review", { reviewId: review.id })}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src={review.image}
                alt={review.title}
                className="w-full h-full object-cover"
              />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Heart button */}
              <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-sm hover:bg-white transition-colors">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>

              {/* Featured badge */}
              {index === 0 && (
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-white text-xs px-2 py-1">
                    Destacado
                  </Badge>
                </div>
              )}
            </div>

            <div className="p-5 space-y-4">
              {/* Restaurant and rating */}
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  {review.restaurantName}
                </Badge>
                <StarRating rating={review.rating} size="sm" />
              </div>

              {/* Title and content */}
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-medium leading-tight line-clamp-2 text-gray-900">
                  {review.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                  {review.content}
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{review.author}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {new Date(review.date).toLocaleDateString('es-ES', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}