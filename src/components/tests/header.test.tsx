import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { CartProvider } from "@/contexts/cartContext";

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
