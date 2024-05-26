import { ItemData, ItemResponse } from "@/interfaces/item-data";
import * as React from "react";

interface CartContextData {
  cartItems: { data: ItemData[] };
  setCartItems: React.Dispatch<
    React.SetStateAction<{
      data: ItemData[];
    }>
  >;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContext = React.createContext({} as CartContextData);

export const CartProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [cartItems, setCartItems] = React.useState({ data: [] as ItemData[] });
  const [openCart, setOpenCart] = React.useState(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = React.useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an CartProvider");
  }

  return context;
}
