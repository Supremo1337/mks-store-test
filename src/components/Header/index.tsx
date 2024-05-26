import React, { useState } from "react";
import * as S from "./styles";
import * as GS from "@/styles/globalStyles";
import { theme } from "@/styles/themes";
import { useItemData } from "@/hooks/useItemData";
import { useCart } from "@/contexts/cartContext";

export default function Header() {
  const { openCart, setOpenCart, cartItems } = useCart();

  return (
    <S.Content>
      <GS.SemiboldText color={theme.colors.white.white_100}>
        MKS <span>Sistemas</span>
      </GS.SemiboldText>
      <S.ShoppingCartButton onClick={() => setOpenCart(true)}>
        <S.Vector src="/icon/Cart.svg" /> {cartItems.data.length}
      </S.ShoppingCartButton>
    </S.Content>
  );
}
