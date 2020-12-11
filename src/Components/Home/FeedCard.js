import React from "react";
import { useHistory } from 'react-router-dom'
import * as S from "../../Screens/ScreenStyled";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import search from "../../Assets/search.svg";
import { BaseUrl } from "../../Constants/BaseUrl";
import { useRequestData } from "../../Hooks/UseRequestData";
import { goToRestaurantsDetailsPage } from '../../Routes/Cordinator'

export default function FeedCard(props) {
  const restaurants = useRequestData(`${BaseUrl}/restaurants`, []);

  console.log(restaurants);

  const history = useHistory()

  return (
    
    <S.DivisaoPrincipal onClick={() => goToRestaurantsDetailsPage(history, props.id)}>
        {/* <Header title={"Rappi4"}/>
        <S.RectangleFeed><img src = {search}/></S.RectangleFeed> */}
    <S.DivText> <S.Text>{props.category} </S.Text> </S.DivText>
    <S.ScreenShot src = {props.logoUrl}/>
    <S.Description>{props.description}</S.Description>
    <S.Rest>{props.name}</S.Rest> <S.Time>{props.deliveryTime} - min</S.Time> <S.DivTextDeliveryFee><S.deliveryFee> Frete R$ {props.shipping}</S.deliveryFee> </S.DivTextDeliveryFee>
</S.DivisaoPrincipal>
  );
}
