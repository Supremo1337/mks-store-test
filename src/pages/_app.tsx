import type { AppProps } from "next/app";
import { Globaltyles } from "@/styles/globalStyles";
import "@fontsource/montserrat";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Globaltyles />
      <Component {...pageProps} />
    </>
  );
}
