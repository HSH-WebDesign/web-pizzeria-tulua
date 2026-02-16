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
    id: 'hawaiana',
    name: 'Hawaiana',
    description: 'La clásica combinación de jamón, piña y mozzarella que divide opiniones pero conquista paladares.',
    priceWhole: 80000,
    priceSlice: 5000,
    image: '/pizzas/hawaiana.png',
  },
  {
    id: 'estofado',
    name: 'Estofada',
    description: 'Pizza estofada con carnes frías, cabano y queso mozzarella.',
    priceWhole: 88000,
    priceSlice: 5500,
    image: '/pizzas/estofado.png',
  },
  {
    id: 'champinones',
    name: 'Pollo Champiñones',
    description: 'Deliciosa pizza con pollo, champiñones frescos y mozzarella.',
    priceWhole: 88000,
    priceSlice: 5500,
    image: '/pizzas/champinones.png',
  },
  {
    id: 'maizitos',
    name: 'Carne con Maizitos',
    description: 'Pizza con carne, granos de maíz dulce, mozzarella y un toque especial que encantará a toda la familia.',
    priceWhole: 96000,
    priceSlice: 6000,
    image: '/pizzas/maizitos.png',
  },
  {
    id: 'peperoni',
    name: 'Pepperoni',
    description: 'La favorita de todos: rodajas de pepperoni, mozzarella y salsa de tomate especiada.',
    priceWhole: 96000,
    priceSlice: 6000,
    image: '/pizzas/peperoni.png',
  },
  {
    id: 'super-estofada',
    name: 'Super Estofada',
    description: 'Versión mejorada de nuestra pizza estofada, incluye chorizo cervezero, pollo desmechado, cabano, salchicha ranchera, salsas de la casa y queso mozzarella.',
    priceWhole: 112000,
    priceSlice: 7000,
    image: '/pizzas/super-estofada.png',
  },
];
