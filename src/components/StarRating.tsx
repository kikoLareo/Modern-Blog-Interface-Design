import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}

export function StarRating({ rating, maxRating = 5, size = "md", showNumber = true }: StarRatingProps) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const filled = index < Math.floor(rating);
    const halfFilled = index === Math.floor(rating) && rating % 1 !== 0;
    
    return (
      <Star
        key={index}
        className={`${sizeClasses[size]} ${
          filled ? "fill-accent text-accent" : 
          halfFilled ? "fill-accent/50 text-accent" : 
          "text-muted-foreground"
        }`}
      />
    );
  });

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center star-rating">
        {stars}
      </div>
      {showNumber && (
        <span className="text-sm font-medium text-foreground ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}