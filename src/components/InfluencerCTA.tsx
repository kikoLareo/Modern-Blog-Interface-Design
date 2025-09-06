import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Instagram, Youtube, Twitter } from "lucide-react";

export function InfluencerCTA() {
  return (
    <div className="px-4 pb-8">
      <Card className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center space-y-4">
        {/* Profile photo */}
        <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center">
          <span className="text-white text-2xl font-serif">M</span>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-semibold text-gray-900">
            ¡Sígueme para más reseñas!
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
            Descubre los mejores sabores de Madrid conmigo. Reseñas honestas y recomendaciones auténticas cada semana.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex justify-center space-x-3">
          <Button 
            size="sm" 
            variant="outline" 
            className="w-10 h-10 p-0 rounded-full border-gray-200 hover:border-primary hover:text-primary"
          >
            <Instagram className="w-4 h-4" />
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="w-10 h-10 p-0 rounded-full border-gray-200 hover:border-primary hover:text-primary"
          >
            <Youtube className="w-4 h-4" />
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="w-10 h-10 p-0 rounded-full border-gray-200 hover:border-primary hover:text-primary"
          >
            <Twitter className="w-4 h-4" />
          </Button>
        </div>

        {/* CTA button */}
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-3 font-medium"
          size="sm"
        >
          <Instagram className="w-4 h-4 mr-2" />
          Seguir en Instagram
        </Button>
      </Card>
    </div>
  );
}