import React, { useState } from "react";

export type Page = "home" | "review" | "restaurant" | "category";

export interface NavigationState {
  page: Page;
  params?: {
    reviewId?: string;
    restaurantId?: string;
    categoryId?: string;
  };
}

interface NavigationContextType {
  currentPage: NavigationState;
  navigate: (page: Page, params?: NavigationState["params"]) => void;
}

const NavigationContext = React.createContext<NavigationContextType | null>(null);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<NavigationState>({ page: "home" });

  const navigate = (page: Page, params?: NavigationState["params"]) => {
    setCurrentPage({ page, params });
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}

