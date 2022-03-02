import styled from "styled-components";

export const FormContainer = styled.section`
  width: 100%;
  height: 203px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4f9419;

  @media (max-width: 768px) {
    height: 363px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 303px;
    width: 90%;
  }
`;
