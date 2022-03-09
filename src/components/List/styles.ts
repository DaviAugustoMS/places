import styled from "styled-components";

export const ListContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 50px 0;

  @media (min-width: 678px) and (max-width: 998px) {
    padding: 50px 10%;
  }
`;

export const ListContent = styled.div.attrs({})`
  width: 100%;
  max-width: 1140px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: initial;

  @media (max-width: 678px) {
    justify-content: center;
  }

  @media (min-width: 678px) and (max-width: 998px) {
    justify-content: initial;
  }
`;
