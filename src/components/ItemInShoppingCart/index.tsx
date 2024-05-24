import React, { useState } from "react";
import * as S from "./styles";
import * as GS from "@/styles/globalStyles";
import { theme } from "@/styles/themes";

export default function ItemInShoppingCart() {
  const [state, setState] = useState();

  return (
    <S.Content>
      <S.LittleItemImage />
      <S.TextLimiter>
        <GS.NormalText $fontSize="13px" $color={theme.colors.gray.gray_900}>
          Apple Watch Series 4 GPS
        </GS.NormalText>
      </S.TextLimiter>
      <S.QuantityBox>
        <GS.NormalText $fontSize="10px" $color={theme.colors.black}>
          Qnd:
        </GS.NormalText>
        <S.QuantityInput>
          <GS.NormalText $fontSize="14px" $color={theme.colors.black}>
            -
          </GS.NormalText>
          <S.Divisor />
          <GS.NormalText $fontSize="14px" $color={theme.colors.black}>
            1
          </GS.NormalText>
          <S.Divisor />
          <GS.NormalText $fontSize="14px" $color={theme.colors.black}>
            +
          </GS.NormalText>
        </S.QuantityInput>
      </S.QuantityBox>
      <GS.BoldText $fontSize="15px" $color={theme.colors.black}>
        R$399
      </GS.BoldText>
    </S.Content>
  );
}
