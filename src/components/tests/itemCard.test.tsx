import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartProvider } from "@/contexts/cartContext";
import ItemCard from "../ItemCard";
import { ItemData } from "@/interfaces/item-data";
import * as cartContext from "../../contexts/cartContext";
import "../tests/mocks/intersectionObserverMock";

const mockSetCartItems = jest.fn();

jest.mock("../../contexts/cartContext", () => ({
  ...jest.requireActual("../../contexts/cartContext"),
  useCart: () => ({
    cartItems: { data: [] },
    setCartItems: mockSetCartItems,
  }),
}));

const useCartSpy = jest.spyOn(cartContext, "useCart");

describe("ItemCard", () => {
  it("should add item to cart when 'Comprar' button is clicked", () => {
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

    let i = 1;

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
          <ItemCard i={i} itemData={itemData} />
        </CartProvider>
      </QueryClientProvider>
    );

    const buyButton = screen.getByText("Comprar");
    fireEvent.click(buyButton);

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("should format price correctly using numberFormat function", () => {
    const price = 1000.0;
    const itemData = {
      id: 1,
      name: "Product 1",
      price,
      photo: "/img/image.jpg",
      description: "Description for Product 1",
      quantity: 1,
      brand: "Product 1 brand",
      createdAt: "Product 1 created date",
      updatedAt: "Product 1 updated date",
    };
    let i = 1;
    const client = new QueryClient();

    render(
      <QueryClientProvider client={client}>
        <CartProvider>
          <ItemCard i={i} itemData={itemData} />
        </CartProvider>
      </QueryClientProvider>
    );

    const numberFormat = (number: number) => {
      const newNumber = number.toString().replace(".00", "");
      return newNumber;
    };

    const formattedPrice = numberFormat(price);
    const priceElement = screen.getByText((content, element) => {
      return content.includes(formattedPrice);
    });

    expect(priceElement).toBeInTheDocument();
  });
});
