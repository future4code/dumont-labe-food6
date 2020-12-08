import React from "react";
import * as S from "../ScreenStyled"
import logo from "../../Assets/logo.svg";
import { goToLoginPage } from "../../Routes/Cordinator";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();
  return (
    <S.ContainerHome>
      <S.ImgLogo
        onClick={() => goToLoginPage(history)}
        src={logo}
        alt="imagem Rappi4 logo"
      />
    </S.ContainerHome>
  );
}

export default HomePage;