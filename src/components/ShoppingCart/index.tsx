import React, { useState } from "react";
import * as S from "./styles";
import * as GS from "@/styles/globalStyles";
import { theme } from "@/styles/themes";
import ItemInShoppingCart from "../ItemInShoppingCart";

export default function ShoppingCart() {
  const [state, setState] = useState();

  return (
    <S.Content>
      <S.CartContent>
        <S.TitleAndCloseBox>
          <GS.BoldText color={theme.colors.white.white_100}>
            Carrinho de compras
          </GS.BoldText>
          <S.CloseButton>
            <GS.NormalText
              $fontSize="28px"
              $color={theme.colors.white.white_100}
            >
              X
            </GS.NormalText>
          </S.CloseButton>
        </S.TitleAndCloseBox>
        <S.ItemsContainer>
          <ItemInShoppingCart />
          <ItemInShoppingCart />
        </S.ItemsContainer>
        <S.TotalContainer>
          <GS.BoldText color={theme.colors.white.white_100}>Total:</GS.BoldText>
          <GS.BoldText color={theme.colors.white.white_100}>R$768</GS.BoldText>
        </S.TotalContainer>
      </S.CartContent>
      <S.CheckoutButton>
        <GS.BoldText color={theme.colors.white.white_100}>
          Finalizar Compra
        </GS.BoldText>
      </S.CheckoutButton>
    </S.Content>
  );
}
