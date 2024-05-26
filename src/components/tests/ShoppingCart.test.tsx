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

const renderComponent = () => {
  const client = new QueryClient();

  render(
    <QueryClientProvider client={client}>
      <CartProvider>
        <ShoppingCart />
      </CartProvider>
    </QueryClientProvider>
  );
};

describe("ShoppingCart", () => {
  it("should close ShoppingCart when hits the button 'X' or 'Continuar explorando'", () => {
    renderComponent();

    const btnShoppingCart = screen.getByTestId("closeCartBtn");
    const btnContinueToExplore = screen.getByTestId("continueToExploreCartBtn");

    fireEvent.click(btnShoppingCart);

    fireEvent.click(btnContinueToExplore);

    expect(mockSetOpenCart).toHaveBeenCalledWith(false);
  });
});
