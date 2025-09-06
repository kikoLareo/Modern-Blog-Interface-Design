export interface Restaurant {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: string;
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  image: string;
  gallery: string[];
  description: string;
  cuisine: string;
  openHours: string;
  phone: string;
  website?: string;
}

export interface Review {
  id: string;
  restaurantId: string;
  restaurantName: string;
  title: string;
  content: string;
  rating: number;
  date: string;
  author: string;
  authorAvatar: string;
  image: string;
  recommendedDishes: string[];
  tags: string[];
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  image: string;
}

export const categories: Category[] = [
  {
    id: "pizza",
    name: "Pizzerías",
    icon: "🍕",
    count: 24,
    image: "https://images.unsplash.com/photo-1651978595428-ce1c3b3cc493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTcwNzUyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "sushi",
    name: "Sushi",
    icon: "🍣",
    count: 18,
    image: "https://images.unsplash.com/photo-1717988732486-285ea23a6f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NTcwMzE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "burger",
    name: "Hamburguesas",
    icon: "🍔",
    count: 31,
    image: "https://images.unsplash.com/photo-1664232802830-592394491fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZm9vZCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NzE1MzQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "cafe",
    name: "Cafeterías",
    icon: "☕",
    count: 42,
    image: "https://images.unsplash.com/photo-1550433578-65e1727d8276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3MTUzNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "fine-dining",
    name: "Fine Dining",
    icon: "🍽️",
    count: 15,
    image: "https://images.unsplash.com/photo-1689672235241-a670b81fce93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwZGVzc2VydHxlbnwxfHx8fDE3NTcxMjA4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "mexican",
    name: "Mexicana",
    icon: "🌮",
    count: 28,
    image: "https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzU3MTUzMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export const restaurants: Restaurant[] = [
  {
    id: "la-pergola",
    name: "La Pergola",
    category: "pizza",
    rating: 4.8,
    reviewCount: 127,
    address: "Calle de Atocha, 91, Madrid",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1651978595428-ce1c3b3cc493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTcwNzUyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1651978595428-ce1c3b3cc493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTcwNzUyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzU3MTUzMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1664232802830-592394491fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZm9vZCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NzE1MzQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    description: "Auténtica pizzería italiana con horno de leña y ambiente acogedor en el corazón de Madrid.",
    cuisine: "Italiana",
    openHours: "Mar-Dom 12:30-00:00",
    phone: "+34 91 429 8736",
    website: "https://lapergola.es"
  },
  {
    id: "sushi-master",
    name: "Sushi Master",
    category: "sushi",
    rating: 4.6,
    reviewCount: 89,
    address: "Calle Serrano, 45, Madrid",
    priceRange: "$$$",
    image: "https://images.unsplash.com/photo-1717988732486-285ea23a6f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NTcwMzE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1717988732486-285ea23a6f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NTcwMzE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    description: "Experiencia sushi tradicional japonesa con ingredientes frescos y presentación exquisita.",
    cuisine: "Japonesa",
    openHours: "Lun-Dom 19:00-01:00",
    phone: "+34 91 576 8923"
  },
  {
    id: "burger-republic",
    name: "Burger Republic",
    category: "burger",
    rating: 4.5,
    reviewCount: 234,
    address: "Gran Vía, 28, Madrid",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1664232802830-592394491fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZm9vZCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NzE1MzQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1664232802830-592394491fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZm9vZCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NzE1MzQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    description: "Hamburguesas gourmet con carne de calidad premium y panes artesanales horneados diariamente.",
    cuisine: "Americana",
    openHours: "Lun-Dom 12:00-00:00",
    phone: "+34 91 523 4567"
  }
];

export const reviews: Review[] = [
  {
    id: "1",
    restaurantId: "la-pergola",
    restaurantName: "La Pergola",
    title: "La mejor pizza italiana de Madrid - Un rincón auténtico que conquista",
    content: "Después de probar decenas de pizzerías en Madrid, puedo afirmar sin dudas que La Pergola se ha convertido en mi favorita absoluta. Desde el momento en que cruzas la puerta, te transportas a una auténtica trattoria italiana. El aroma del horno de leña y la calidez del ambiente crean la experiencia perfecta.\n\nLa masa es simplemente espectacular: fina, crujiente por fuera y tierna por dentro, con ese sabor característico que solo se consigue con una fermentación larga y el toque del horno de leña. Los ingredientes son de primera calidad - se nota en cada bocado que no escatiman en la calidad del tomate, la mozzarella fresca y los embutidos italianos.\n\nEl servicio es excepcional, con un equipo que conoce perfectamente cada plato y te hace sentir como en casa. Los precios son más que justos para la calidad que ofrecen.",
    rating: 5,
    date: "2024-09-01",
    author: "María González",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1651978595428-ce1c3b3cc493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTcwNzUyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    recommendedDishes: ["Pizza Margherita", "Carbonara", "Tiramisú"],
    tags: ["pizza", "italiana", "horno de leña", "auténtica"],
    slug: "la-mejor-pizza-italiana-madrid-pergola"
  },
  {
    id: "2",
    restaurantId: "sushi-master",
    restaurantName: "Sushi Master",
    title: "Experiencia sushi excepcional - Tradición japonesa en el corazón de Madrid",
    content: "Sushi Master ha superado todas mis expectativas. Como amante del sushi auténtico, encontrar un lugar que mantenga la tradición japonesa en Madrid no es fácil, pero este restaurante lo logra magistralmente.\n\nEl chef tiene una técnica impecable y se nota su experiencia en cada pieza. El pescado es fresco, de calidad sashimi, y el arroz tiene la temperatura y textura perfectas. El omakase es una experiencia que recomiendo a cualquier amante del sushi - cada pieza es una pequeña obra de arte.\n\nEl ambiente es íntimo y elegante, perfecto para una cena especial. El servicio es atento sin ser intrusivo, y el personal conoce perfectamente tanto los platos como los maridajes de sake.",
    rating: 5,
    date: "2024-08-28",
    author: "Carlos Ruiz",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1717988732486-285ea23a6f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NTcwMzE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    recommendedDishes: ["Omakase", "Nigiri de atún", "Maki de salmón"],
    tags: ["sushi", "japonesa", "omakase", "pescado fresco"],
    slug: "experiencia-sushi-excepcional-sushi-master-madrid"
  },
  {
    id: "3",
    restaurantId: "burger-republic",
    restaurantName: "Burger Republic",
    title: "Hamburguesas gourmet que marcan la diferencia - Sabor y calidad premium",
    content: "Burger Republic ha revolucionado el concepto de hamburguesería en Madrid. No es solo una hamburguesa más - es una experiencia gastronómica completa que combina ingredientes premium con técnicas culinarias excepcionales.\n\nLa carne es de una calidad impresionante, jugosa y con un sabor intenso que se nota que es de ganado de primera. Los panes artesanales se hornean diariamente y tienen esa textura perfecta que aguanta todos los jugos sin deshacerse. Las patatas fritas están en su punto exacto de cocción.\n\nLo que más me impresiona es la atención al detalle: desde las salsas caseras hasta la presentación, todo está pensado para crear la hamburguesa perfecta. El ambiente es moderno y acogedor, ideal tanto para una comida casual como para una cena con amigos.",
    rating: 4,
    date: "2024-08-25",
    author: "Ana Martín",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1664232802830-592394491fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZm9vZCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NzE1MzQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    recommendedDishes: ["Republic Burger", "Patatas trufa", "Onion rings"],
    tags: ["hamburguesas", "gourmet", "carne premium", "panes artesanales"],
    slug: "hamburguesas-gourmet-burger-republic-madrid"
  }
];