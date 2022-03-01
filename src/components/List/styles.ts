import styled from "styled-components";

export const ListContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 50px 0;

  @media (max-width: 768px) {
  }
`;

export const ListContent = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: initial;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
