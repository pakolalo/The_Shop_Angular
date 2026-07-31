export interface ProductModel {
  id: number;
  title: string;
  price: number;
  images: string[];
  favorite?: boolean;
  creationAt?: string;
  quantity?: number;
}
