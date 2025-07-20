export interface CartItem {
  productId: string;
  quantity: number;
  title?: string;
  image_url?: string;
}

export interface Cart {
  _id?: string;
  userId?: string;
  items: CartItem[];
  createdAt?: string;
}
