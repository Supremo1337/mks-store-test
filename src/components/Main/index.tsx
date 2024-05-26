import React, { useState } from "react";
import * as S from "./styles";
import ItemCard from "../ItemCard";
import { ItemData, ItemResponse } from "@/interfaces/item-data";
import { useItemData } from "@/hooks/useItemData";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";

export default function Main() {
  const { data, isLoading } = useItemData();

  const animProps = {
    initial: { opacity: 0, x: 400 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 400 },
  };

  return (
    <S.Content>
      {data?.map((itemData: ItemData, i: number) => {
        return (
          <>
            {isLoading ? (
              <Skeleton variant="rounded" width={217} height={285} />
            ) : (
              <ItemCard key={itemData.id} itemData={itemData} i={i} />
            )}
          </>
        );
      })}
    </S.Content>
  );
}
