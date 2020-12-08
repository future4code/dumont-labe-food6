import React from "react";
import * as S from "../Home/ComponentsStyled";

function FeedPage() {
  return (
    <S.Feed>
      <S.Bar>
        {" "}
        <S.Title>
          <S.Title2>Rappi4</S.Title2>
        </S.Title>
        <S.Busca type="text"  placeholder="Buscar..."/>
      </S.Bar>
    </S.Feed>
  );
}

export default FeedPage;
