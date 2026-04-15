import React from "react";

export type ContainerType = "narrow" | "default";

export interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  containerType?: ContainerType;
}

export type ButtonVariant =
  | "primary"
  | "outline"
  | "text"
  | "icon"
  | "addItem"
  | "removeItem"
  | "viewDetails";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface ProductDataObj {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: string;
  rating: number;
  image_url: string;
  image_attr: string;
}

export interface ItemObj extends ProductDataObj {
  quantity: number;
}

export interface CartContextType {
  items: ItemObj[];
  addToCart: (product: ProductDataObj) => void;
  removeFromCart: (productID: number) => void;
  // updateItemTotal: (productID: number, amount: number) => void;
}

// export interface ModalType {
//   children: React.ReactNode;
//   open: boolean;
//   className?: string;
// }
