import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartProvider } from "@/contexts/cartContext";
import ShoppingCart from "../ShoppingCart";
import "../tests/mocks/intersectionObserverMock";

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
