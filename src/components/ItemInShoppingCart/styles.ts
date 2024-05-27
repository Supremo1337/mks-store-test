import { theme } from "@/styles/themes";
import styled from "styled-components";
import { CloseButton } from "../ShoppingCart/styles";

interface FlexContainerRowProps {
  $gap: string;
  $gapTablet: string;
  $alignItems: string;
}

export const Content = styled.div`
  width: 324.94px;
  height: 100px;
  flex-shrink: 0;

  display: flex;
  padding: 15px;
  gap: 9px;
  align-items: center;

  border-radius: 8px;
  position: relative;
  z-index: 2;

  background: ${theme.colors.white.white_100};
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  @media (min-width: 486px) {
    gap: 25px;
    width: 97%;
  }
`;

export const FlexContainerRow = styled.div<FlexContainerRowProps>`
  display: flex;
  gap: ${(props) => props.$gap};
  align-items: ${(props) => props.$alignItems};
  @media (min-width: 486px) {
    gap: ${(props) => props.$gapTablet};
  }
`;

export const TextLimiter = styled.div`
  width: 100px;
`;

export const QuantityBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const QuantityInput = styled.div`
  width: 80px;
  height: 19px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.white.white_100};
  border: 0.3px solid ${theme.colors.gray.gray_600};
  border-radius: 4px;
  padding: 0 4px;
`;

export const Divisor = styled.div`
  width: 1px;
  height: 10px;
  background: ${theme.colors.gray.gray_600};
`;

export const CartItemCloseButton = styled(CloseButton)`
  width: 18px;
  height: 18px;

  position: absolute;
  top: -7%;
  left: 97%;
  z-index: 3;
`;

export const GroupDivisorAndOperator = styled.button`
  height: 13px;

  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  border: none;
`;
