import React, { useState } from "react";
import * as S from "./styles";
import ItemCard from "../ItemCard";
import { ItemData, ItemResponse } from "@/interfaces/item-data";
import { useItemData } from "@/hooks/useItemData";
import { Skeleton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const { data, isLoading } = useItemData();

  return (
    <S.Content>
      {data?.map((itemData: ItemData, i: number) => {
        return (
          <React.Fragment key={itemData.id}>
            {isLoading ? (
              <Skeleton variant="rounded" width={217} height={285} />
            ) : (
              <AnimatePresence>
                <ItemCard itemData={itemData} i={i} />{" "}
              </AnimatePresence>
            )}
          </React.Fragment>
        );
      })}
    </S.Content>
  );
}
