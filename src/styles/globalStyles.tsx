import { createGlobalStyle } from "styled-components";
import { theme } from "./themes";
import styled from "styled-components";

export interface ImageProps {
  $bgImage: string;
  $width?: string;
  $height?: string;
}

interface TextsProps {
  $fontSize?: string;
  $color?: string;
}

export const Globaltyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Montserrat";
}

main{
  display: flex;
  flex-direction:column;
  height: 100vh;
  justify-content: space-between;
}

body {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background: ${theme.colors.white.white_200};
}


#__next{
  display: flex;
  flex-direction: column;
  justify-content:center;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export const BoldText = styled.p<TextsProps>`
  font: ${theme.fonts.montserrat.boldText};
  font-size: ${(props) => props.$fontSize};
  color: ${theme.colors.white.white_100};
  color: ${(props) => props.$color};
  text-transform: capitalize;
`;

export const SemiboldText = styled.div<TextsProps>`
  font: ${theme.fonts.montserrat.semiboldText};
  font-size: ${(props) => props.$fontSize};
  color: ${theme.colors.white.white_100};
  text-transform: capitalize;
  & span {
    font: ${theme.fonts.montserrat.lightText};
  }
`;

export const NormalText = styled.p<TextsProps>`
  font: ${theme.fonts.montserrat.normalText};
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.$color};
  text-transform: capitalize;
`;

export const LightText = styled.p<TextsProps>`
  font: ${theme.fonts.montserrat.lightText};
  font-size: ${(props) => props.$fontSize};
  color: ${theme.colors.gray.gray_900};
  text-transform: capitalize;
`;