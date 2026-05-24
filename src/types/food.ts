export interface IFood {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
  createdAt: string;
}

export type FoodInput = Omit<IFood, 'id' | 'createdAt'>;

export type ModalType = 'new' | 'edit' | 'confirm' | null;

export interface FormFields {
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export interface FormErrors {
  name?: string;
  description?: string;
  price?: string;
  image?: string;
}
