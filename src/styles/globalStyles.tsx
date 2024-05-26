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

interface LongTextsProps {
  $fontSize?: string;
  $color?: string;
  $isLongText?: boolean;
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

export const NormalText = styled.p<LongTextsProps>`
  font: ${theme.fonts.montserrat.normalText};
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.$color};
  text-transform: capitalize;
  text-overflow: ${(props) => (props.$isLongText ? "ellipsis" : "")};
  overflow: ${(props) => (props.$isLongText ? "hidden" : "")};
  display: ${(props) => (props.$isLongText ? "-webkit-box !important" : "")};
  -webkit-line-clamp: ${(props) => (props.$isLongText ? 2 : "")};
  -webkit-box-orient: ${(props) => (props.$isLongText ? "vertical" : "")};
  white-space: ${(props) => (props.$isLongText ? "normal" : "")};

  width: ${(props) => (props.$isLongText ? "min-content" : "")};
`;

export const LightText = styled.p<LongTextsProps>`
  font: ${theme.fonts.montserrat.lightText};
  font-size: ${(props) => props.$fontSize};
  color: ${theme.colors.gray.gray_900};
  text-overflow: ${(props) => (props.$isLongText ? "ellipsis" : "")};
  overflow: ${(props) => (props.$isLongText ? "hidden" : "")};
  display: ${(props) => (props.$isLongText ? "-webkit-box !important" : "")};
  -webkit-line-clamp: ${(props) => (props.$isLongText ? 2 : "")};
  -webkit-box-orient: ${(props) => (props.$isLongText ? "vertical" : "")};
  white-space: ${(props) => (props.$isLongText ? "normal" : "")};
`;
