export interface ProductPlans {
  id: number;
  name: string;
  priceTotal: string;
  price: string;
  porcent: number;
  color?: string;
}

export default interface ProductInterface {
  id: number;
  name: string;
  feelPoints: number;
  plans: ProductPlans[];
  sku: string;
}
