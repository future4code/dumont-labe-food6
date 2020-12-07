import React from 'react';
import * as S from '../ComponentsStyled'
import logo from '../../Assets/logo.svg'
import {goToLoginPage}from '../../Routes/Cordinator'
import {useHistory}from 'react-router-dom';

function HomeCard() {
    const history=useHistory();
  return(
    <S.BackgroundHome>
        <S.ImgLogo onClick={()=>goToLoginPage(history)}src={logo} alt ='imagem Rappi4 logo'/>

    </S.BackgroundHome>


  ) 
}

export default HomeCard;