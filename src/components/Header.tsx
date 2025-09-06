import { Search, Menu, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigation } from "./Navigation";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  transparent?: boolean;
}

export function Header({ title, showBack = false, transparent = false }: HeaderProps) {
  const { navigate, currentPage } = useNavigation();

  return (
    <header className={`sticky top-0 z-50 ${transparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'} transition-all duration-200`}>
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center space-x-3">
            {showBack ? (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate("home")}
                className="w-10 h-10 rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <div>
                  <h1 className="font-serif text-xl font-semibold text-gray-900">Foodie</h1>
                  <p className="text-xs text-gray-500 -mt-1">Reseñas auténticas</p>
                </div>
              </div>
            )}
          </div>

          {/* Center title for sub-pages */}
          {title && (
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h2 className="font-medium text-gray-900">{title}</h2>
            </div>
          )}

          {/* Right side */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* Search bar for home page */}
        {currentPage.page === "home" && !transparent && (
          <div className="mt-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Buscar restaurantes, platos..." 
                className="pl-12 h-12 bg-gray-50 border-0 rounded-full text-gray-900 placeholder:text-gray-500 focus:bg-white focus:shadow-sm transition-all"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}