export interface ProductModel {
  id: Number;
  title: string;
  price: number;
  images: string[];
  favorite?: boolean;
  creationAt?: string;
}
