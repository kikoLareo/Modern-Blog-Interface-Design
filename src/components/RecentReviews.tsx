import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { StarRating } from "./StarRating";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { reviews } from "../data/mockData";
import { useNavigation } from "./Navigation";

export function RecentReviews() {
  const { navigate } = useNavigation();
  const recentReviews = reviews.slice(0, 6);

  return (
    <div className="space-y-6 px-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-1">
            Últimas reseñas
          </h2>
          <p className="text-gray-600">Recién publicadas</p>
        </div>
        <Button variant="ghost" className="text-primary hover:text-primary/80 font-medium">
          Ver todas
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Grid of review cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recentReviews.map((review, index) => (
          <Card 
            key={review.id} 
            className="cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden group"
            onClick={() => navigate("review", { reviewId: review.id })}
          >
            <div className="aspect-[16/10] relative overflow-hidden">
              <ImageWithFallback
                src={review.image}
                alt={review.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              
              {/* New badge for recent reviews */}
              {index < 2 && (
                <div className="absolute top-3 left-3">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">
                    Nuevo
                  </Badge>
                </div>
              )}

              {/* Rating */}
              <div className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5">
                <StarRating rating={review.rating} size="sm" />
              </div>
            </div>

            <div className="p-4 space-y-3">
              {/* Restaurant badge */}
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                {review.restaurantName}
              </Badge>

              {/* Title */}
              <h3 className="font-serif text-base font-medium leading-tight line-clamp-2 text-gray-900 group-hover:text-primary transition-colors">
                {review.title}
              </h3>

              {/* Content preview */}
              <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                {review.content}
              </p>

              {/* Author and date */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{review.author}</span>
                </div>
                
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(review.date).toLocaleDateString('es-ES', { 
                    day: 'numeric', 
                    month: 'short' 
                  })}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}