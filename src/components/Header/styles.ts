import { theme } from "@/styles/themes";
import styled from "styled-components";

export const Content = styled.div`
  height: 101px;
  background: ${theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 5%;
`;

export const ShoppingCartButton = styled.div`
  width: 90px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 15px;
  padding: 15px 15px;
  background: ${theme.colors.white.white_100};
  border-radius: 8px;

  font: ${theme.fonts.montserrat.boldText};
  font-size: 18px;

  cursor: pointer;
`;

export const Vector = styled.img``;
