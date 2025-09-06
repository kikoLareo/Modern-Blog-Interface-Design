import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { StarRating } from "./StarRating";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrendingUp, Clock, Users } from "lucide-react";
import { reviews } from "../data/mockData";
import { useNavigation } from "./Navigation";
import { motion } from "motion/react";

export function TrendingCarousel() {
  const { navigate } = useNavigation();
  const trendingReviews = reviews.slice(3, 8);

  return (
    <div className="relative px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-3xl opacity-50" />
      
      <div className="relative space-y-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Trending Ahora
              </h2>
              <p className="text-muted-foreground">Los más populares esta semana</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
            <TrendingUp className="w-3 h-3 mr-1" />
            Hot
          </Badge>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 pb-4">
            {trendingReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <Card 
                  className="min-w-[320px] cursor-pointer overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2"
                  onClick={() => navigate("review", { reviewId: review.id })}
                >
                  {/* Image with overlay gradient */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={review.image}
                      alt={review.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Floating badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm border-0 shadow-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {new Date(review.date).toLocaleDateString('es-ES', { 
                          day: 'numeric', 
                          month: 'short' 
                        })}
                      </Badge>
                      {index === 0 && (
                        <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-sm animate-pulse">
                          #1 Trending
                        </Badge>
                      )}
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm">
                        <StarRating rating={review.rating} size="sm" />
                      </div>
                    </div>

                    {/* Bottom overlay with restaurant info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <Badge variant="outline" className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-2">
                        {review.restaurantName}
                      </Badge>
                      <h3 className="font-semibold text-lg leading-tight line-clamp-2 mb-1">
                        {review.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {review.content}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium text-sm">
                            {review.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">{review.author}</p>
                          <p className="text-xs text-muted-foreground">Food Critic</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Users className="w-4 h-4" />
                        <span>{Math.floor(Math.random() * 50) + 20} likes</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-200 rounded-lg transition-colors duration-300" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}