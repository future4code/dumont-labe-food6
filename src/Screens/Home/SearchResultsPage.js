import React from "react";
import * as S from "../ScreenStyled";
import Header from "../../Components/Header/Header";
import search from "../../Assets/search.svg";
import burguer from "../../Assets/burguer.jpg";
import hamburguer from "../../Assets/hamburguer.png";
import seta from "../../Assets/seta.svg";

export default function SearchResultsPage() {
  return (
  
  <S.Container>
        <Header title={"Busca"}/>
        <S.Seta><img img src={seta} /></S.Seta>
        <S.RectangleFeed><img img src = {search}/></S.RectangleFeed>
        <S.DivText> <S.Text>Burger </S.Text> <S.TextCopy>Asiática</S.TextCopy> <S.TextCopy>Massas</S.TextCopy> <S.TextCopy3>Saudável</S.TextCopy3> </S.DivText>
        <S.ScreenShot src = {burguer}/>
        <S.Rest>Vinil Butantã</S.Rest> <S.Time> 50 - 60 min</S.Time> <S.DivTextDeliveryFee><S.deliveryFee> Frete R$ 6.00</S.deliveryFee> </S.DivTextDeliveryFee>
        <S.ScreenShot2 src = {hamburguer} />
        <S.Rest2>Bullguer Eldorado</S.Rest2>
        <S.Time2> 30 - 45 min </S.Time2>
        <S.DivTextDeliveryFee><S.deliveryFee2>Frete R$ 6.00</S.deliveryFee2></S.DivTextDeliveryFee>
    </S.Container>
  );
}
