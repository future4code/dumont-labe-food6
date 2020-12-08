import React from "react";
import * as S from "../ScreenStyled"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import search from "../../Assets/search.svg"

export default function FeedPage() {
    return (
      <S.Container>
      <Header title={"Rappi4"}/>
      <S.RectangleFeed><img img src = {search}/></S.RectangleFeed>
      Burger 
      <Footer />
  </S.Container>
    )
}
