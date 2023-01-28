import { Tag } from './app/shared/models/Tag';
import { Product } from "./app/shared/models/Product";

export const sample_products: Product[] = [
  {
    id: '1',
    name: 'Corte feminino',
    price: 30,
    time: '50-60',
    favorite: false,
    origins: ['Afro'],
    stars: 4.0,
    imageUrl: 'assets/product-1.jpg',
    tags: ['Afro', 'Cortes']
  },
  {
    id: '2',
    name: 'Hidratação',
    price: 30,
    time: '50-60',
    favorite: true,
    origins: ['Afro'],
    stars: 4.0,
    imageUrl: 'assets/product-2.jpg',
    tags: ['Afro', 'Cortes', 'Hidratação']
  }
]

export const sample_tags: Tag[] = [
  {name: 'All', count: 2},
  {name: 'Hidratação', count: 1},
  {name: 'Corte Feminino', count: 1}
]
