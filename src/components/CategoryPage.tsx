import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { StarRating } from "./StarRating";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { categories, reviews, restaurants } from "../data/mockData";
import { useNavigation } from "./Navigation";

interface CategoryPageProps {
  categoryId: string;
}

export function CategoryPage({ categoryId }: CategoryPageProps) {
  const { navigate } = useNavigation();
  const [sortBy, setSortBy] = useState<string>("rating");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-white p-4 flex items-center justify-center">
        <p className="text-gray-600">Categoría no encontrada</p>
      </div>
    );
  }

  // Filter restaurants by category
  let categoryRestaurants = restaurants.filter(r => r.category === categoryId);
  
  // Apply price filter
  if (priceFilter !== "all") {
    categoryRestaurants = categoryRestaurants.filter(r => r.priceRange === priceFilter);
  }
  
  // Apply sorting
  categoryRestaurants.sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviewCount - a.reviewCount;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Get reviews for this category
  const categoryReviews = reviews.filter(review => {
    const restaurant = restaurants.find(r => r.id === review.restaurantId);
    return restaurant?.category === categoryId;
  });

  return (
    <div className="min-h-screen bg-white pb-8">
      <div className="px-4 space-y-6">
        {/* Header */}
        <div className="py-4 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h1 className="font-serif text-2xl font-semibold text-gray-900">
                {category.name}
              </h1>
              <p className="text-gray-600">{category.count} lugares disponibles</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <Card className="p-4 rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-sm font-medium">Filtros</span>
            </div>
            
            <div className="flex-1 flex space-x-3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full bg-gray-50 border-0 rounded-lg">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Mejor valorados</SelectItem>
                  <SelectItem value="reviews">Más reseñas</SelectItem>
                  <SelectItem value="name">Nombre A-Z</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-full bg-gray-50 border-0 rounded-lg">
                  <SelectValue placeholder="Precio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los precios</SelectItem>
                  <SelectItem value="$">$ (Económico)</SelectItem>
                  <SelectItem value="$$">$$ (Moderado)</SelectItem>
                  <SelectItem value="$$$">$$$ (Caro)</SelectItem>
                  <SelectItem value="$$$$">$$$$ (Muy caro)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Results count */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            {categoryRestaurants.length} resultado{categoryRestaurants.length !== 1 ? 's' : ''} encontrado{categoryRestaurants.length !== 1 ? 's' : ''}
          </p>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
            {categoryReviews.length} reseñas
          </Badge>
        </div>

        {/* Restaurant listings */}
        <div className="space-y-4">
          {categoryRestaurants.map((restaurant, index) => {
            const restaurantReviews = reviews.filter(r => r.restaurantId === restaurant.id);
            const latestReview = restaurantReviews[0];
            
            return (
              <Card 
                key={restaurant.id}
                className="cursor-pointer hover:shadow-md transition-all duration-200 rounded-2xl overflow-hidden group"
                onClick={() => navigate("restaurant", { restaurantId: restaurant.id })}
              >
                <div className="flex">
                  {/* Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                    <ImageWithFallback
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {restaurant.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
                      </div>
                      
                      <div className="text-right">
                        <StarRating rating={restaurant.rating} size="sm" />
                        <p className="text-xs text-gray-500 mt-1">({restaurant.reviewCount})</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <span className="text-primary font-semibold">{restaurant.priceRange}</span>
                      <span>•</span>
                      <span>{restaurant.address}</span>
                    </div>

                    {/* Latest review preview */}
                    {latestReview && (
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                          "{latestReview.content}"
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          - {latestReview.author}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* No results */}
        {categoryRestaurants.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
              No hay resultados
            </h3>
            <p className="text-gray-600 mb-4">
              Prueba ajustando los filtros para encontrar más opciones
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSortBy("rating");
                setPriceFilter("all");
              }}
              className="rounded-full"
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}