import { ButtonContainer, ButtonText } from "./styles";

const ButtonComponent = ({ ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonText>Adicionar</ButtonText>
    </ButtonContainer>
  );
};

export { ButtonComponent };
