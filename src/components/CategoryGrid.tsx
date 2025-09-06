import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Grid3X3, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { categories } from "../data/mockData";
import { useNavigation } from "./Navigation";
import { motion } from "motion/react";

export function CategoryGrid() {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-6 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
            <Grid3X3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Categorías populares</h2>
            <p className="text-muted-foreground">Encuentra tu tipo de comida favorita</p>
          </div>
        </div>
        <Button variant="ghost" className="group">
          Ver todas
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>

      {/* Grid with enhanced cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.slice(0, 6).map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <Card 
              className="cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2"
              onClick={() => navigate("category", { categoryId: category.id })}
            >
              <div className="relative aspect-[3/2]">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Multiple gradient overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Popular badge for first category */}
                {index === 0 && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg text-xs">
                      🔥 Popular
                    </Badge>
                  </div>
                )}

                {/* Content overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 text-white"
                  >
                    {/* Icon with glow effect */}
                    <div className="relative">
                      <span className="text-2xl filter drop-shadow-lg">
                        {category.icon}
                      </span>
                      <div className="absolute inset-0 text-2xl opacity-50 blur-sm">
                        {category.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-lg leading-tight drop-shadow-lg">
                        {category.name}
                      </h3>
                      <p className="text-sm opacity-90 drop-shadow-sm">
                        {category.count} locales
                      </p>
                    </div>
                  </motion.div>

                  {/* Progress bar showing popularity */}
                  <div className="mt-3 bg-white/20 rounded-full h-1 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(category.count / 10, 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className="h-full bg-gradient-to-r from-white to-orange-200 rounded-full"
                    />
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200/50 rounded-lg transition-colors duration-300" />
            </Card>

            {/* Floating decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-purple-400/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity delay-200" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-pink-400/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity delay-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}