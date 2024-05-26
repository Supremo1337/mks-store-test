import { theme } from "@/styles/themes";
import styled from "styled-components";

interface ItemImage {
  $image: string;
  $width: string;
  $height: string;
}

export const Content = styled.div`
  width: 217px;
  height: 285px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: ${theme.colors.white.white_100};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
`;

export const ItemInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;
  gap: 8px;
`;

export const ItemImage = styled.div<ItemImage>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  background-image: ${(props) => props.$image};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const NameAndPriceBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const PriceBox = styled.div`
  width: max-content;
  display: flex;
  padding: 4px 7px;
  align-items: center;

  background: ${theme.colors.gray.gray_800};
  border-radius: 5px;
`;

export const AddToShoppingCartButton = styled.button`
  width: 100%;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  cursor: pointer;

  background: ${theme.colors.blue};
  border-radius: 0 0 8px 8px;
  border: 0;
`;
