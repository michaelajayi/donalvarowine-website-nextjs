export interface TestimonialType {
  review: string;
  author: string;
}
export interface Product {
  id: string;
  title: string;
  generic: string;
  link: string;
  image: string;
  sideImage: string;
  showcase: string;
  pricePerBox: number;
  pricePerBottle: number;
  description: string;
}

export type ProductType = Product | null;

export type Products = Product[];

export type Currency =
  | "NGN"
  | "USD"
  | "GBP"
  | "EUR"
  | "JPY"
  | "AUD"
  | "CAD"
  | "CHF"
  | "CNY"
  | "SEK"
  | "NZD";

export interface CartItem {
  product: Product;
  bottleQty: number;
  boxQty: number;
  totalPricePerBox: number;
  totalPricePerBottle: number;
  // pricingModel: "perBottle" | "perBox";
}

export type CartItems = CartItem[];
