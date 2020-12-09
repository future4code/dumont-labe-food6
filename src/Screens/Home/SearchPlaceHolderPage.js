import React from "react";
import * as S from "../ScreenStyled";
import Header from "../../Components/Header/Header";
import search from "../../Assets/search.svg";
import seta from "../../Assets/seta.svg";

export default function FeedPage() {
  return (
    <S.Container>
      <Header title={"Busca"} />
      <S.Seta>
        <img img src={seta} />
      </S.Seta>
      <S.RectangleFeed>
        <img img src={search} />
      </S.RectangleFeed>
      <S.TextCopy>Busque por nome de restaurante</S.TextCopy>
    </S.Container>
  );
}
