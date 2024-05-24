import { theme } from "@/styles/themes";
import styled from "styled-components";

export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${theme.colors.blue};
`;

export const CartContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;
  padding: 20px;
  /* background-color: yellow; */
`;

export const TitleAndCloseBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckoutButton = styled.div`
  width: 100%;
  height: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.black};
`;
