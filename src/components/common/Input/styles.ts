import styled from "styled-components";
import InputMask from "react-input-mask";

interface IInputProps {
  width?: string;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  color: #ffffff;
`;

export const Input = styled.input<IInputProps>`
  width: ${({ width }) => width || "150px"};
  height: 48px;
  border: none;
  border-radius: 7px;
  padding: 0 16px;
  outline: none;
  text-transform: capitalize;
`;

export const MaskInput = styled(InputMask)<IInputProps>`
  width: ${({ width }) => width || "150px"};
  height: 48px;
  border: none;
  border-radius: 7px;
  padding: 0 16px;
  outline: none;
`;
