import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { CartProvider } from "@/contexts/cartContext";
import ShoppingCart from "../ShoppingCart";
import ItemCard from "../ItemCard";
import { ItemData } from "@/interfaces/item-data";
import * as cartContext from "../../contexts/cartContext";

const mockSetOpenCart = jest.fn();
const mockSetCartItems = jest.fn();

jest.mock("../../contexts/cartContext", () => ({
  ...jest.requireActual("../../contexts/cartContext"),
  useCart: () => ({
    setOpenCart: mockSetOpenCart,
    cartItems: { data: [] },
    setCartItems: mockSetCartItems,
  }),
}));

const useCartSpy = jest.spyOn(cartContext, "useCart");

describe("Header", () => {
  it("should open ShoppingCart when hits the button ShoppingCartButton", () => {
    const client = new QueryClient();
    render(
      <QueryClientProvider client={client}>
        <CartProvider>
          <Header />
        </CartProvider>
      </QueryClientProvider>
    );

    const btnShoppingCart = screen.getByTestId("openCart");

    fireEvent.click(btnShoppingCart);

    expect(mockSetOpenCart).toHaveBeenCalledWith(true);
  });
});

describe("ItemCard", () => {
  it.only("should add item to cart when 'Comprar' button is clicked", () => {
    const name = "Product 1";
    useCartSpy.mockReturnValue({
      cartItems: {
        data: [
          {
            id: 1,
            name,
            price: 10,
            photo: "/img/image.jpg",
            description: "Description for Product 1",
            quantity: 1,
            brand: "Product 1 brand",
            createdAt: "Product 1 created date",
            updatedAt: "Product 1 updated date",
          },
        ],
      },
      openCart: true,
      setCartItems: () => {},
      setOpenCart: () => {},
    });

    const itemData: ItemData = {
      id: 1,
      name: "Product 1",
      price: 10,
      photo: "/img/image.jpg",
      description: "Description for Product 1",
      quantity: 1,
      brand: "Product 1 brand",
      createdAt: "Product 1 created date",
      updatedAt: "Product 1 updated date",
    };

    const client = new QueryClient();

    render(
      <QueryClientProvider client={client}>
        <CartProvider>
          <ItemCard itemData={itemData} />
        </CartProvider>
      </QueryClientProvider>
    );

    const buyButton = screen.getByText("Comprar");
    fireEvent.click(buyButton);

    expect(screen.getByText(name)).toBeInTheDocument();
  });
});

describe("ShoppingCart", () => {
  it("should close ShoppingCart when hits the button ShoppingCartButton", () => {
    const client = new QueryClient();
    render(
      <QueryClientProvider client={client}>
        <CartProvider>
          <ShoppingCart />
        </CartProvider>
      </QueryClientProvider>
    );

    const btnShoppingCart = screen.getByTestId("closeCart");

    fireEvent.click(btnShoppingCart);

    expect(mockSetOpenCart).toHaveBeenCalledWith(false);
  });
});

describe("ShoppingCart", () => {
  it("should close ShoppingCart when hits the button ShoppingCartButton", () => {
    const client = new QueryClient();
    render(
      <QueryClientProvider client={client}>
        <CartProvider>
          <ShoppingCart />
        </CartProvider>
      </QueryClientProvider>
    );

    const btnShoppingCart = screen.getByTestId("closeCart");

    fireEvent.click(btnShoppingCart);

    expect(mockSetOpenCart).toHaveBeenCalledWith(false);
  });
});
