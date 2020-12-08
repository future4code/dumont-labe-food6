import React from 'react'
import * as S from '../ScreenStyled'
import HeaderRestaurant from '../../Components/Header/HeaderRestaurant'
import Hamburguer from '../../Assets/hamburguer.png'
import MaoSanta from '../../Assets/maosantaburguer.png'

function Restaurant() {
    return( 

    <S.Restaurant>
    <HeaderRestaurant />
    <S.image> <img img src = {Hamburguer}/> </S.image >
    <S.RestaurantTitle> Bullguer Vila Madalena </S.RestaurantTitle>
    <S.Burger> Burguer </S.Burger>
    <S.TempoDeEntrega>50 - 60 min</S.TempoDeEntrega>
    <S.Frete>Frete R$6,00</S.Frete>
    <S.Endereco>R. Fradique Coutinho, 1136 - Vila Madalena</S.Endereco>
    <S.Principais>Principais</S.Principais>
    <S.Path />
    <S.Rectangle>
        <S.MaoSantaBurguer> <img img src = {MaoSanta}/> </S.MaoSantaBurguer>

    </S.Rectangle>
    </S.Restaurant>
    
    
    )}
  


  export default Restaurant





