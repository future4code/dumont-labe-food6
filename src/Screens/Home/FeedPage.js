import React from "react";
import * as S from "../ScreenStyled";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import search from "../../Assets/search.svg";
import burguer from "../../Assets/burguer.jpg";
import hamburguer from "../../Assets/hamburguer.png";
 import { useEffect, useState } from "react";
 import { BaseUrl } from "../../Constants/BaseUrl";
 import axios from "axios";
//  import { useProtectPage } from "../../Hooks/UseProtectPage"

 export default function FeedPage() {
//   //  useProtectPage()

//    const [restaurants, setRestaurants] = useState([]);

//    useEffect(() => {
//      const token = localStorage.getItem("auth-token");

//      axios
//        .get(`${BaseUrl}/restaurants`, {
//          headers: {
//            auth: token,
//          },
//        })
//        .then((response) => {
//          console.log(response);
//        })
//        .catch((error) => {
//         console.log(error);
//        });
//    }, []);
  return (
    <S.Container>
      <Header title={"Rappi4"} />
      <S.RectangleFeed>
        <img img src={search} />
      </S.RectangleFeed>
      <S.DivText>
        {" "}
        <S.Text>Burger </S.Text> <S.TextCopy>Asiática</S.TextCopy>{" "}
        <S.TextCopy>Massas</S.TextCopy> <S.TextCopy3>Saudável</S.TextCopy3>{" "}
      </S.DivText>
      <S.ScreenShot src={burguer} />
      <S.Rest>Vinil Butantã</S.Rest> <S.Time> 50 - 60 min</S.Time>{" "}
      <S.DivTextDeliveryFee>
        <S.deliveryFee> Frete R$ 6.00</S.deliveryFee>{" "}
      </S.DivTextDeliveryFee>
      <S.ScreenShot2 src={hamburguer} />
      <S.Rest2>Bullguer Eldorado</S.Rest2>
      <S.Time2> 30 - 45 min </S.Time2>
      <S.DivTextDeliveryFee>
        <S.deliveryFee2>Frete R$ 6.00</S.deliveryFee2>
      </S.DivTextDeliveryFee>
      <Footer />
    </S.Container>
  );
  }

