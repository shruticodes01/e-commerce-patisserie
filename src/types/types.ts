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
