import styled from "styled-components";
import myImage from "../../../assets/pollygon.png";

interface IProps {
  color?: string;
}
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SelectLabel = styled.label`
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  color: #ffffff;
`;
export const SelectContent = styled.div`
  width: 263px;
  height: 48px;
  border: none;
  border-radius: 7px;
  background: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Select = styled.select<IProps>`
  height: 48px;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(${myImage}) no-repeat center right #fff;
  outline: none;
  color: ${({ color }) => color};
  margin: 0 16px;
  width: 90%;
`;

export const SelectOption = styled.option``;
