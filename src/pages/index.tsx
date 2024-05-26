import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import ShoppingCart from "@/components/ShoppingCart";
import { CartProvider, useCart } from "@/contexts/cartContext";
import { useItemData } from "@/hooks/useItemData";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { openCart } = useCart();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Main />
        <Footer />
        <AnimatePresence>{openCart && <ShoppingCart />}</AnimatePresence>
      </main>
    </>
  );
}
