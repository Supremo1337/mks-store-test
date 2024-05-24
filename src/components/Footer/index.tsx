import React, { useState } from "react";
import * as S from "./styles";
import * as GS from "@/styles/globalStyles";
import { theme } from "@/styles/themes";

export default function Footer() {
  return (
    <>
      <S.Content>
        <GS.NormalText $fontSize="12px" $color={theme.colors.black}>
          MKS sistemas © Todos os direitos reservados
        </GS.NormalText>
      </S.Content>
    </>
  );
}
