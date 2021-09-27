import { ProductInterface } from '@atlascode/coffee-front-components';

export const plansData = [
  {
    id: 1,
    name: 'Basic',
    priceTotal: 'R$ 17,90',
    price: 'R$ 24,90',
    porcent: 0.1,
  },
  {
    id: 2,
    name: 'Standard',
    priceTotal: 'R$ 37,90',
    price: 'R$ 49,90',
    porcent: 0.15,
  },
  {
    id: 3,
    name: 'Premium',
    priceTotal: 'R$ 53,90',
    price: 'R$ 60,90',
    porcent: 0.2,
  },
];

export default [
  {
    id: 1,
    feelPoints: 70,
    name: 'Product test',
    plans: plansData,
  },
  {
    id: 2,
    feelPoints: 70,
    name: 'Product test',
    plans: plansData,
  },
  {
    id: 3,
    feelPoints: 70,
    name: 'Product test',
    plans: plansData,
  },
  {
    id: 4,
    feelPoints: 70,
    name: 'Product test',
    plans: plansData,
  },
] as ProductInterface[];
