import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;
export const ModalContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 7px;
  background-color: #fff;
  z-index: 9999;
  position: absolute;
  top: 30%;
  left: 40%;
`;

export const ModalContent = styled.div``;
