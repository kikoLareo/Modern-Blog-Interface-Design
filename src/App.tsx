import { NavigationProvider, useNavigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { ReviewPage } from "./components/ReviewPage";
import { RestaurantPage } from "./components/RestaurantPage";
import { CategoryPage } from "./components/CategoryPage";

function AppContent() {
  const { currentPage } = useNavigation();

  const getHeaderProps = () => {
    switch (currentPage.page) {
      case "home":
        return {};
      case "review":
        return { title: "Reseña", showBack: true };
      case "restaurant":
        return { title: "Restaurante", showBack: true };
      case "category":
        return { title: "Categoría", showBack: true };
      default:
        return {};
    }
  };

  const renderPage = () => {
    switch (currentPage.page) {
      case "home":
        return <HomePage />;
      case "review":
        return <ReviewPage reviewId={currentPage.params?.reviewId || ""} />;
      case "restaurant":
        return <RestaurantPage restaurantId={currentPage.params?.restaurantId || ""} />;
      case "category":
        return <CategoryPage categoryId={currentPage.params?.categoryId || ""} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header {...getHeaderProps()} />
      {renderPage()}
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}