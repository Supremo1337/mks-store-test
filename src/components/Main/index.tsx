import React, { useState } from "react";
import * as S from "./styles";
import ItemCard from "../ItemCard";
import { ItemData, ItemResponse } from "@/interfaces/item-data";
import { useItemData } from "@/hooks/useItemData";
import { Skeleton } from "@mui/material";

export default function Main() {
  const { data, isLoading } = useItemData();

  return (
    <S.Content>
      {data?.map((itemData: ItemData) => {
        return (
          <>
            {isLoading ? (
              <Skeleton variant="rounded" width={217} height={285} />
            ) : (
              <ItemCard key={itemData.id} itemData={itemData} />
            )}
          </>
        );
      })}
    </S.Content>
  );
}
