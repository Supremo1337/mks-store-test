import React, { useState } from "react";
import * as S from "./styles";
import * as GS from "@/styles/globalStyles";
import { theme } from "@/styles/themes";
import ItemInShoppingCart from "../ItemInShoppingCart";
import { useCart } from "@/contexts/cartContext";
import { ItemData } from "@/interfaces/item-data";
import { useItemData } from "@/hooks/useItemData";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";

export default function ShoppingCart() {
  const { setOpenCart, cartItems } = useCart();
  const { isLoading } = useItemData();

  const getTotalPrice = () => {
    let sum = 0;
    for (let item of cartItems.data) {
      sum += item.price * item.quantity;
    }
    return sum;
  };

  const animProps = {
    initial: { opacity: 0, x: 400 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 400 },
  };

  return (
    <S.Content as={motion.div} {...animProps} transition={{ duration: 0.5 }}>
      <S.CartContent>
        <S.TitleAndCloseBox>
          <GS.BoldText $fontSize="24px" color={theme.colors.white.white_100}>
            Carrinho de compras
          </GS.BoldText>
          <S.CloseButton
            data-testid="closeCart"
            onClick={() => setOpenCart(false)}
          >
            <GS.NormalText
              $fontSize="28px"
              $color={theme.colors.white.white_100}
            >
              X
            </GS.NormalText>
          </S.CloseButton>
        </S.TitleAndCloseBox>
        <S.ItemsContainer>
          {cartItems.data.map((cartItemData: ItemData, i: number) => {
            return (
              <>
                {isLoading ? (
                  <Skeleton variant="rounded" width="97%" height={100} />
                ) : (
                  <ItemInShoppingCart
                    key={cartItemData.id}
                    cartItemData={cartItemData}
                    i={i}
                  />
                )}
              </>
            );
          })}
        </S.ItemsContainer>
        <S.TotalContainer>
          <GS.BoldText color={theme.colors.white.white_100}>Total:</GS.BoldText>
          <GS.BoldText color={theme.colors.white.white_100}>
            R${getTotalPrice()}
          </GS.BoldText>
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
