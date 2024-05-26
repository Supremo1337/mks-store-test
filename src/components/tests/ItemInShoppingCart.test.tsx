import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartProvider } from "@/contexts/cartContext";
import ShoppingCart from "../ShoppingCart";
import "./mocks/intersectionObserverMock";
import { ItemData } from "@/interfaces/item-data";
import * as cartContext from "../../contexts/cartContext";
import ItemInShoppingCart from "../ItemInShoppingCart";

const mockSetCartItems = jest.fn();

jest.mock("../../contexts/cartContext", () => ({
  ...jest.requireActual("../../contexts/cartContext"),
  useCart: () => ({
    cartItems: { data: [] },
    setCartItems: mockSetCartItems,
  }),
}));

const cartItemsMock: ItemData[] = [
  {
    id: 1,
    name: "Product 1",
    price: 20.0,
    photo: "/img/image1.jpg",
    description: "Description for Product 1",
    quantity: 2,
    brand: "Product 1 brand",
    createdAt: "Product 1 created date",
    updatedAt: "Product 1 updated date",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20.0,
    photo: "/img/image2.jpg",
    description: "Description for Product 2",
    quantity: 1,
    brand: "Product 2 brand",
    createdAt: "Product 2 created date",
    updatedAt: "Product 2 updated date",
  },
];

const renderComponent = () => {
  const client = new QueryClient();

  render(
    <QueryClientProvider client={client}>
      <CartProvider>
        {cartItemsMock.map((cartItemData, i) => {
          return (
            <ItemInShoppingCart
              key={cartItemData.id}
              i={i}
              cartItemData={cartItemData}
            />
          );
        })}
      </CartProvider>
    </QueryClientProvider>
  );
};

describe("ItemInShoppingCart", () => {
  it("should render cart items correctly", async () => {
    renderComponent();

    await waitFor(() => {
      const product1Name = screen.getByText("Product 1");
      const product1Quantity = screen.getByText("2");
      const product1Price = screen.getByText("R$40"); // 2 x 20.00

      const product2Name = screen.getByText("Product 2");
      const product2Quantity = screen.getByText("1");
      const product2Price = screen.getByText("R$20");

      expect(product1Name).toBeInTheDocument();
      expect(product1Quantity).toBeInTheDocument();
      expect(product1Price).toBeInTheDocument();

      expect(product2Name).toBeInTheDocument();
      expect(product2Quantity).toBeInTheDocument();
      expect(product2Price).toBeInTheDocument();
    });
  });

  it("should increase and decrease quantity correctly", () => {
    renderComponent();

    const initialQuantity = screen.getByText("1");

    const increaseBtn = screen.getAllByTestId("increaseBtn")[0];
    const decreaseBtn = screen.getAllByTestId("decreaseBtn")[0];

    fireEvent.click(increaseBtn);
    expect(screen.getByText("2")).toBeInTheDocument();

    fireEvent.click(decreaseBtn);
    expect(initialQuantity).toBeInTheDocument();
  });
});
