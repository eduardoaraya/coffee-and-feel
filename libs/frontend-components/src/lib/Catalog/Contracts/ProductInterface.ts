export interface ProductPlans {
  id: number;
  name: string;
  priceTotal: string;
  price: string;
  porcent: number;
  color?: string;
}

export interface ProductAttribute {
  id: number;
  attributeCode: string;
  label: string;
  value: string | unknown[];
}

export interface ProductContent {
  title: string;
  content: string;
}

export interface ProductInterface {
  id: number;
  name: string;
  feelPoints: number;
  plans: ProductPlans[];
  sku: string;
  contents?: ProductContent[];
  attributes?: ProductAttribute[];
}

export default ProductInterface;
