import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 209px);
  justify-content: center;
  gap: 30px;
  padding: 40px;

  @media (min-width: 1245px) {
    padding: 0 10%;
  }
`;
