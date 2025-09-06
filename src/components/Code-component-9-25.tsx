import { Badge } from "./ui/badge";
import { categories } from "../data/mockData";
import { useNavigation } from "./Navigation";

export function CategoryChips() {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-4 px-4">
      <h3 className="font-serif text-xl font-medium text-gray-900">
        Explorar categorías
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {categories.slice(0, 8).map((category) => (
          <Badge
            key={category.id}
            variant="secondary"
            className="px-4 py-2 text-sm bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-full cursor-pointer transition-colors duration-200 flex items-center space-x-2"
            onClick={() => navigate("category", { categoryId: category.id })}
          >
            <span className="text-base">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
            <span className="text-xs text-gray-500">({category.count})</span>
          </Badge>
        ))}
      </div>
    </div>
  );
}