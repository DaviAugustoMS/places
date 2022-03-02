import styled from "styled-components";
import InputMask from "react-input-mask";

interface IInputProps {
  width?: string;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const InputLabel = styled.label`
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  color: #ffffff;
`;

export const InputContent = styled.div`
  width: 385px;
  height: 48px;
  border: none;
  border-radius: 7px;
  background: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 305px;
  height: 46px;
  border: none;
  border-radius: 7px;
  outline: none;
  text-transform: capitalize;
  padding-left: 16px;
`;

export const InputMaskContent = styled.div`
  width: 210px;
  height: 48px;
  border: none;
  border-radius: 7px;
  background: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MaskInput = styled(InputMask)`
  width: 150px;
  height: 46px;
  border: none;
  border-radius: 7px;

  padding-left: 16px;
  outline: none;
`;
