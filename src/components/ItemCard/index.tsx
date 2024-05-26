import React, { useState } from "react";
import * as S from "./styles";
import * as HS from "../Header/styles";
import * as GS from "@/styles/globalStyles";
import { theme } from "@/styles/themes";
import { ItemData, ItemResponse } from "@/interfaces/item-data";
import { useCart } from "@/contexts/cartContext";

interface ItemCardProps {
  itemData: ItemData;
}

export default function ItemCard({ itemData }: ItemCardProps) {
  const [state, setState] = useState();
  const { cartItems, setCartItems } = useCart();

  const handleAddCart = () => {
    setCartItems((prevState) => {
      const existingItemIndex = prevState.data.findIndex(
        (cartItem) => cartItem.id === itemData.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevState.data];
        updatedItems[existingItemIndex].quantity += 1;
        return { data: updatedItems };
      }
      return { data: [...prevState.data, { ...itemData, quantity: 1 }] };
    });
  };

  const numberFormat = (number: number) => {
    const newNumber = number.toString().replace(".00", "");
    return newNumber;
  };

  return (
    <S.Content>
      <S.ItemInfoBox>
        <S.ItemImage
          $width="180px"
          $height="138px"
          $image={`url(${itemData.photo})` || ""}
        />
        <S.NameAndPriceBox>
          <GS.NormalText $isLongText={true} $color={theme.colors.black}>
            {itemData.name}
          </GS.NormalText>
          <S.PriceBox>
            <GS.BoldText $fontSize="15px" color={theme.colors.white.white_100}>
              R$ {numberFormat(itemData.price)}
            </GS.BoldText>
          </S.PriceBox>
        </S.NameAndPriceBox>
        <GS.LightText
          $isLongText={true}
          $fontSize="10px"
          title={itemData.description}
        >
          {itemData.description}
        </GS.LightText>
      </S.ItemInfoBox>
      <S.AddToShoppingCartButton onClick={handleAddCart}>
        <HS.Vector src="/icon/shopping-bag.svg" />
        <GS.SemiboldText $fontSize="14px">Comprar</GS.SemiboldText>
      </S.AddToShoppingCartButton>
    </S.Content>
  );
}
