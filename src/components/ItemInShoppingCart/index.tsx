import React from "react";
import * as S from "./styles";
import * as GS from "@/styles/globalStyles";
import { theme } from "@/styles/themes";
import { ItemData } from "@/interfaces/item-data";
import * as ICS from "../ItemCard/styles";
import { useCart } from "@/contexts/cartContext";
import { motion } from "framer-motion";

interface ItemInShoppingCartProps {
  cartItemData: ItemData;
  i: number;
}

export default function ItemInShoppingCart({
  cartItemData,
  i,
}: ItemInShoppingCartProps) {
  const { setCartItems } = useCart();

  const handleRemoveItem = (item: ItemData) => {
    setCartItems((prevState) => ({
      data: prevState.data.filter((cartItem) => cartItem.id !== item.id),
    }));
  };

  const handleAlterQuantity = (item: ItemData, action: string) => {
    setCartItems((prevState) => {
      const existingItemIndex = prevState.data.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevState.data];
        if (action === "decrease") {
          if (updatedItems[existingItemIndex].quantity > 1) {
            updatedItems[existingItemIndex].quantity -= 1;
          }
        } else if (action === "increase") {
          updatedItems[existingItemIndex].quantity += 1;
        }
        return { data: updatedItems };
      }

      return prevState;
    });
  };

  const animProps = {
    initial: { opacity: 0, x: -300 },
    whileInView: { opacity: 1, x: 0 },
  };

  return (
    <S.Content
      as={motion.div}
      {...animProps}
      transition={{ duration: 0.2, delay: i * 0.1 }}
    >
      <S.FlexContainerRow $alignItems="center" $gap="12px" $gapTablet="21px">
        <ICS.ItemImage
          $width="46px"
          $height="57px"
          $image={`url(${cartItemData.photo})` || ""}
        />
        <S.TextLimiter>
          <GS.NormalText $fontSize="13px" $color={theme.colors.gray.gray_900}>
            {cartItemData.name}
          </GS.NormalText>
        </S.TextLimiter>
      </S.FlexContainerRow>

      <S.FlexContainerRow $alignItems="flex-end" $gap="12px" $gapTablet="25px">
        <S.QuantityBox>
          <GS.NormalText $fontSize="10px" $color={theme.colors.black}>
            Qnd:
          </GS.NormalText>

          <S.QuantityInput>
            <S.GroupDivisorAndOperator
              data-testid="decreaseBtn"
              onClick={() => handleAlterQuantity(cartItemData, "decrease")}
            >
              <GS.NormalText $fontSize="14px" $color={theme.colors.black}>
                -
              </GS.NormalText>
              <S.Divisor />
            </S.GroupDivisorAndOperator>

            <GS.NormalText $fontSize="14px" $color={theme.colors.black}>
              {cartItemData.quantity}
            </GS.NormalText>
            <S.GroupDivisorAndOperator
              data-testid="increaseBtn"
              onClick={() => handleAlterQuantity(cartItemData, "increase")}
            >
              <S.Divisor />
              <GS.NormalText $fontSize="14px" $color={theme.colors.black}>
                +
              </GS.NormalText>
            </S.GroupDivisorAndOperator>
          </S.QuantityInput>
        </S.QuantityBox>
        <GS.BoldText $fontSize="15px" $color={theme.colors.black}>
          R${cartItemData.price * cartItemData.quantity}
        </GS.BoldText>
      </S.FlexContainerRow>

      <S.CartItemCloseButton onClick={() => handleRemoveItem(cartItemData)}>
        <GS.NormalText $fontSize="14px" $color={theme.colors.white.white_100}>
          X
        </GS.NormalText>
      </S.CartItemCloseButton>
    </S.Content>
  );
}
