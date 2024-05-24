import React, { useState } from "react";
import * as S from "./styles";
import * as HS from "../Header/styles";
import * as GS from "@/styles/globalStyles";
import { theme } from "@/styles/themes";

export default function ItemCard() {
  const [state, setState] = useState();

  return (
    <S.Content>
      <S.ItemInfoBox>
        <S.ItemImage />
        <S.NameAndPriceBox>
          <GS.NormalText $color={theme.colors.black}>
            Apple Watch Series 4 GPS
          </GS.NormalText>
          <S.PriceBox>
            <GS.BoldText $fontSize="15px" color={theme.colors.white.white_100}>
              R$399
            </GS.BoldText>
          </S.PriceBox>
        </S.NameAndPriceBox>
        <GS.LightText $fontSize="10px">
          Redesigned from scratch and completely revised.
        </GS.LightText>
      </S.ItemInfoBox>
      <S.AddToShoppingCartButton>
        <HS.Vector src="/icon/shopping-bag.svg" />
        <GS.SemiboldText $fontSize="14px">Comprar</GS.SemiboldText>
      </S.AddToShoppingCartButton>
    </S.Content>
  );
}
