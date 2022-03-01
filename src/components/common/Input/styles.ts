import styled from "styled-components";
import InputMask from "react-input-mask";

interface IInputProps {
  width?: string;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const InputLabel = styled.label`
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  color: #ffffff;
`;

export const Input = styled.input`
  width: 405px;
  height: 48px;
  border: none;
  border-radius: 7px;
  padding: 0 16px;
  outline: none;
  text-transform: capitalize;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MaskInput = styled(InputMask)`
  width: 150px;
  height: 48px;
  border: none;
  border-radius: 7px;
  padding: 0 16px;
  outline: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
