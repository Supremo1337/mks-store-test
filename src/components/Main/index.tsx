import React, { useState } from "react";
import * as S from "./styles";
import ItemCard from "../ItemCard";
import { ItemData, ItemResponse } from "@/interfaces/item-data";
import { useItemData } from "@/hooks/useItemData";

export default function Main() {
  const { data, isLoading, isError } = useItemData();

  console.log("data", data);

  return (
    <S.Content>
      {data?.map((itemData: ItemData) => {
        return <ItemCard key={itemData.id} itemData={itemData} />;
      })}
    </S.Content>
  );
}
