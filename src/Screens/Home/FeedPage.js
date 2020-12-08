import React from "react";
import { useProtectPage } from "../../Hooks/UseProtectPage";
import { useRequestData } from "../../Hooks/UseRequestData";
import { BASE_URL } from "../../Constants/BaseUrl";
// import FeedCard from "../../Components/FeedCard/FeedCard";
import * as S from "../Home/ComponentsStyled";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

function FeedPage() {
//   useProtectPage();

//   const [food, setFood] = useState([])

//   useEffect(() => {
//     const token = localStorage.getItem("token")
//     axios
//     .get(`${BASE_URL}/restaurants`,{
//       headers: {
//         Authorization: token,
//       },
    
//     }).then(response => {
//       console.log("RESPOSTA",response)
    
//     }).catch(error => {
//       console.log(error);
//     })
// }, [])

  return (
    <S.Feed>
      <S.Bar>
        {" "}
        <S.Title>
          <S.Title2>Rappi4</S.Title2>
        </S.Title>
        <S.Busca type="text" placeholder="Buscar..." />
      </S.Bar>
      {/* {data &&
        data.restaurants.map((restaurants) => {
          return (
            <FeedCard
              key={data.id}
              id={data.id}
              data={data.category}
              data={data.deliveryTime}
            />
          );
        })} */}
    </S.Feed>
  );
}

export default FeedPage;
