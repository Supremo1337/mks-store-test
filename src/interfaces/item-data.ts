export interface ItemData {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  quantity: number;
}

export interface ItemResponse {
  data: ItemData[];
}
