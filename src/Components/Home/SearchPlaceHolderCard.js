import React, { useEffect } from "react";
import * as S from "../../Screens/ScreenStyled";
import Header from "../../Components/Header/Header";
import search from "../../Assets/search.svg";
import seta from "../../Assets/seta.svg";
import { useRequestData } from "../../Hooks/UseRequestData";
import { BaseUrl } from "../../Constants/BaseUrl";

export default function SearchPlaceHolderCard() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const restaurants = useRequestData(`${BaseUrl}/restaurants`, []);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(restaurants.name.includes);
  };
  //useEffect(() => {
  //const results = restaurants.filter((restaurant) => {
  //return restaurant.name.includes(searchTerm);
  //});

  //setSearchResults(results);
  //}, [searchTerm]);

  //const results = props.restaurants.filter((restaurant) => {
  //const newName = restaurant.name.toLowerCase();
  //pra deixar tudo em minúsculo
  //return newName.includes(name.toLowerCase());
  //});

  return (
    <S.Container>
      <Header title={"Busca"}></Header>
      <S.Seta>
        <img img src={seta} />
      </S.Seta>
      <S.RectangleFeed>
        <img img src={search} />
        <input
          type="text"
          placeholder="Busque por nome de restaurante"
          value={searchTerm}
          onChange={handleChange}
        />

        {/* {results.lenght !== 0 && results.map((result) => <p>{result.name}</p>)} */}
      </S.RectangleFeed>
    </S.Container>
  );
}
