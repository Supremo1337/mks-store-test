import type { AppProps } from "next/app";
import "@fontsource/montserrat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/contexts/cartContext";
import { Globaltyles } from "@/styles/globalStyles";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Globaltyles />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </QueryClientProvider>
  );
}
