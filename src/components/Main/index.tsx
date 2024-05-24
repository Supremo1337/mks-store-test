import React, { useState } from "react";
import * as S from "./styles";
import ItemCard from "../ItemCard";
import { ItemsContainer } from "../ShoppingCart/styles";

export default function Main() {
  const [state, setState] = useState();

  return (
    <S.Content>
      <ItemCard />
      <ItemCard />
    </S.Content>
  );
}
