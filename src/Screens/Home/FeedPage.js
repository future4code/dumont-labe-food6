import React from "react";
import * as S from "../ScreenStyled"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function FeedPage() {
    return (
      <S.Container>
      <Header title={"Rappi4"}/>
      <S.RectangleFeed> </S.RectangleFeed>
      <Footer />
  </S.Container>
    )
}
