import logoImg from "../../assets/logo.png";

import { HeaderContainer, HeaderContent, Logo } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={logoImg} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export { Header };
