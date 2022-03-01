import styled from "styled-components";
import InputMask from "react-input-mask";

export const CardContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 7px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  margin-bottom: 30px;
  margin-right: 15px;
  position: relative;
  background: #fff;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const CardContentTop = styled.div`
  width: 100%;
  height: 104px;
  border-bottom: 1px solid #ababab;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const CardFlag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  align-items: start;
`;

export const CardFlagImage = styled.img`
  width: 56px;
  height: 34px;
  object-fit: cover;
`;
export const CardName = styled.span`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  color: #4f9419;
`;
export const CardButtons = styled.div``;

export const CardButton = styled.button`
  border: 0;
  background: transparent;
  margin-left: 10px;
  cursor: pointer;
`;

export const CardContentBottom = styled.div`
  width: 100%;
  height: 146px;
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
`;

export const CardText = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardTextEdit = styled.p`
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  color: #4f9419;
  margin-bottom: -20px;
  text-align: center;
`;

export const CardInput = styled.input`
  border: 0;
  border-bottom: 1px solid #ababab50;
  text-transform: capitalize;
  padding: 0 16px;
  outline: none;
`;

export const CardInputData = styled(InputMask)`
  border: 0;
  border-bottom: 1px solid #ababab50;
  padding: 0 16px;
  outline: none;
`;
