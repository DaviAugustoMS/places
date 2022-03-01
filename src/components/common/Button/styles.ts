import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  max-width: 203px;
  height: 49px;
  background: #006c18;
  border: none;
  border-radius: 7px;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ButtonText = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: 18px;
  color: #ffffff;
`;
