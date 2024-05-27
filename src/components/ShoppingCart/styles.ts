import { theme } from "@/styles/themes";
import styled from "styled-components";

interface ItemsContainerProps {
  $overflow: string;
  $jContent: string;
}

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${theme.colors.blue.blue_800};

  position: fixed;
  right: 0;

  @media (min-width: 486px) {
    max-width: 486px;
  }
`;

export const CartContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;
  padding: 20px;

  @media (min-width: 486px) {
    padding: 30px;
  }
`;

export const TitleAndCloseBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-radius: 50%;
  background: ${theme.colors.black};
  border: 0;
`;

export const ItemsContainer = styled.div<ItemsContainerProps>`
  max-height: 516px;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: ${(props) => props.$overflow};
  padding-top: 9px;

  justify-content: ${(props) => props.$jContent};

  @media (min-width: 486px) {
    align-items: center;
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContinueToExplore = styled.button`
  width: max-content;
  height: 55px;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background: ${theme.colors.purple};
  border: 0;
  border-radius: 8px;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.black};
  cursor: pointer;

  border: 0;
`;
