import { ItemData, ItemResponse } from "@/interfaces/item-data";
import React, {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
} from "react";

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

const CartContext = createContext({} as CartContextData);

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState({ data: [] as ItemData[] });
  const [openCart, setOpenCart] = useState(false);

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
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an CartProvider");
  }

  return context;
}
