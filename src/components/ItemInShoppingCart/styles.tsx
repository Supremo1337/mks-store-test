import { theme } from "@/styles/themes";
import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  background: ${theme.colors.white.white_100};
  border-radius: 8px;
`;

export const LittleItemImage = styled.div`
  /* width: max-content; */
  width: 46px;
  height: 57px;

  background-image: url("/icon/apple-watch.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TextLimiter = styled.div`
  width: 100px;
`;

export const QuantityBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  /* background: green; */
`;

export const QuantityInput = styled.div`
  width: 50px;
  height: 19px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background: ${theme.colors.white.white_100};
  border: 0.3px solid ${theme.colors.gray.gray_600};
  border-radius: 4px;
`;

export const Divisor = styled.div`
  width: 1px;
  height: 10px;
  background: ${theme.colors.gray.gray_600};
`;
