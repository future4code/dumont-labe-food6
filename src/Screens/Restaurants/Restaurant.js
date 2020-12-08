import React from 'react'
import * as S from '../ScreenStyled'
import HeaderRestaurant from '../../Components/Header/HeaderRestaurant'
import Hamburguer from '../../Assets/hamburguer.png'

function Restaurant() {
    return( 

    <S.Restaurant>
    <HeaderRestaurant />
    <S.image> <img img src = {Hamburguer}/> </S.image >
    
    
    </S.Restaurant>
    
    
    )}
  


  export default Restaurant





