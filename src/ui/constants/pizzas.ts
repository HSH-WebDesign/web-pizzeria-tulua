export interface Pizza {
  id: string;
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  price: number;
  image: string;
}

export const pizzas: Pizza[] = [
  {
    id: 'margarita',
    name: {
      es: 'Margarita',
      en: 'Margherita',
    },
    description: {
      es: 'La clásica pizza napolitana con salsa de tomate San Marzano, mozzarella di bufala, albahaca fresca y aceite de oliva virgen extra.',
      en: 'The classic Neapolitan pizza with San Marzano tomato sauce, buffalo mozzarella, fresh basil and extra virgin olive oil.',
    },
    price: 9.50,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600',
  },
  {
    id: 'quattro-formaggi',
    name: {
      es: 'Quattro Formaggi',
      en: 'Four Cheese',
    },
    description: {
      es: 'Una sinfonía de sabores con mozzarella, gorgonzola, parmesano y provolone. Para los verdaderos amantes del queso.',
      en: 'A symphony of flavors with mozzarella, gorgonzola, parmesan and provolone. For true cheese lovers.',
    },
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600',
  },
  {
    id: 'diavola',
    name: {
      es: 'Diavola',
      en: 'Diavola',
    },
    description: {
      es: 'Para los valientes: salami picante, mozzarella, aceitunas negras y un toque de guindilla que despierta tus sentidos.',
      en: 'For the brave: spicy salami, mozzarella, black olives and a touch of chili that awakens your senses.',
    },
    price: 11.50,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600',
  },
  {
    id: 'prosciutto-funghi',
    name: {
      es: 'Prosciutto e Funghi',
      en: 'Prosciutto e Funghi',
    },
    description: {
      es: 'Jamón de Parma, champiñones frescos, mozzarella y rúcula. Una combinación elegante y deliciosa.',
      en: 'Parma ham, fresh mushrooms, mozzarella and arugula. An elegant and delicious combination.',
    },
    price: 13.00,
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600',
  },
  {
    id: 'capricciosa',
    name: {
      es: 'Capricciosa',
      en: 'Capricciosa',
    },
    description: {
      es: 'La favorita de muchos: jamón, champiñones, alcachofas, aceitunas negras y mozzarella. Un clásico italiano.',
      en: 'A favorite of many: ham, mushrooms, artichokes, black olives and mozzarella. An Italian classic.',
    },
    price: 13.50,
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=600',
  },
  {
    id: 'vegetariana',
    name: {
      es: 'Vegetariana',
      en: 'Vegetarian',
    },
    description: {
      es: 'Berenjena, calabacín, pimientos, cebolla roja, tomates cherry y mozzarella. Fresca y saludable.',
      en: 'Eggplant, zucchini, peppers, red onion, cherry tomatoes and mozzarella. Fresh and healthy.',
    },
    price: 11.00,
    image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=600',
  },
];
