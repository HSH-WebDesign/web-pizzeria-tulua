export interface Pizza {
  id: string;
  name: string;
  description: string;
  priceWhole: number; // Precio pizza completa en COP
  priceSlice: number; // Precio por porción en COP
  image: string;
}

export const pizzas: Pizza[] = [
  {
    id: 'champinones',
    name: 'Champiñones',
    description: 'Deliciosa pizza con champiñones frescos, mozzarella y un toque de ajo.',
    priceWhole: 35000,
    priceSlice: 5000,
    image: '/pizzas/champinones.png',
  },
  {
    id: 'estofado',
    name: 'Estofado',
    description: 'Pizza estilo estofado con carne jugosa, mozzarella y especias tradicionales.',
    priceWhole: 35000,
    priceSlice: 5000,
    image: '/pizzas/estofado.png',
  },
  {
    id: 'hawaiana',
    name: 'Hawaiana',
    description: 'La clásica combinación de jamón, piña y mozzarella que divide opiniones pero conquista paladares.',
    priceWhole: 35000,
    priceSlice: 5000,
    image: '/pizzas/hawaiana.png',
  },
  {
    id: 'maizitos',
    name: 'Maizitos',
    description: 'Pizza con granos de maíz dulce, mozzarella y un toque especial que encantará a toda la familia.',
    priceWhole: 35000,
    priceSlice: 5000,
    image: '/pizzas/maizitos.png',
  },
  {
    id: 'peperoni',
    name: 'Peperoni',
    description: 'La favorita de todos: rodajas de pepperoni, mozzarella y salsa de tomate especiada.',
    priceWhole: 35000,
    priceSlice: 5000,
    image: '/pizzas/peperoni.png',
  },
  {
    id: 'super-estofada',
    name: 'Super Estofada',
    description: 'Versión mejorada de nuestra pizza estofado, con doble porción de carne y queso extra.',
    priceWhole: 35000,
    priceSlice: 5000,
    image: '/pizzas/super-estofada.png',
  },
];
