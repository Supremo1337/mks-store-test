import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartProvider } from "@/contexts/cartContext";
import ShoppingCart from "../ShoppingCart";
import "../tests/mocks/intersectionObserverMock";

const mockSetOpenCart = jest.fn();

jest.mock("../../contexts/cartContext", () => ({
  ...jest.requireActual("../../contexts/cartContext"),
  useCart: () => ({
    setOpenCart: mockSetOpenCart,
    cartItems: { data: [] },
  }),
}));

describe("ShoppingCart", () => {
  it("should close ItemInShoppingCart when hits the button 'X'", () => {
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
