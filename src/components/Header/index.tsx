import React, { useState } from "react";
import * as S from "./styles";
import * as GS from "@/styles/globalStyles";
import { theme } from "@/styles/themes";

export default function Header() {
  const [state, setState] = useState();

  return (
    <S.Content>
      <GS.SemiboldText color={theme.colors.white.white_100}>
        MKS <span>Sistemas</span>
      </GS.SemiboldText>
      <S.ShoppingCartButton>
        <S.Vector src="/icon/Cart.svg" /> 0
      </S.ShoppingCartButton>
    </S.Content>
  );
}
