import React, { createContext, useState } from "react";
import type {
  CartContextType,
  ItemObj,
  ProductDataObj,
} from "../../types/types";

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: (_product: ProductDataObj) => {},
  removeFromCart: (_productID: number) => {},
});

export default CartContext;

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [shoppingCart, setShoppingCart] = useState<{ items: ItemObj[] }>({
    items: [],
  });

  const addToCart = (product: ProductDataObj) => {
    setShoppingCart((prevShoppingCart) => {
      // creating a copy of old array of items present in the cart.
      const updatedItems: ItemObj[] = [...prevShoppingCart.items];

      // checking whether the item already exists in the shopping cart.
      // if existing cart item.id is equal to currently addedItem.id, then findIndex() returns item's index.
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem: ItemObj) => cartItem.id === product.id,
      );

      // item that already exists on the shopping cart
      const existingCartItem: ItemObj = updatedItems[existingCartItemIndex];

      // if newly added item already exist on the cart, then update its quantity by 1
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };

        // re-insert already existing item by overwriting it with updatedItem to increase its quantity
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        //new cart item start with quantity of 1
        updatedItems.push({ ...product, quantity: 1 });
      }
      return {
        items: updatedItems,
      };
    });
  };

  const removeFromCart = (productID: number) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const existingCartItemIndex = updatedItems.findIndex(
        (item) => item.id === productID,
      );

      const existingCartItem = updatedItems[existingCartItemIndex];

      // if existing item quantity is equal to 1, remove the entire item from the shopping cart
      if (existingCartItem.quantity === 1) {
        // remove the item at the given index
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        // If item quantity is > 1, update quantity, by reducing the quantity by 1
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };

        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  };

  const cartContext = {
    items: shoppingCart.items,
    addToCart,
    removeFromCart,
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
