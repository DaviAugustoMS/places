import styled from "styled-components";
import myImage from "../../../assets/pollygon.png";

interface IProps {
  color?: string;
}
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 0 16px;
  background: #ffffff;
`;
export const Select = styled.select<IProps>`
  width: 263px;
  height: 48px;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(${myImage}) no-repeat center right #fff;
  outline: none;
  color: ${({ color }) => color};
`;

export const SelectOption = styled.option``;