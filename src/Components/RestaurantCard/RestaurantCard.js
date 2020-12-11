import React from 'react'
import * as S from '../../Screens/ScreenStyled'
import { useRequestData } from '../../Hooks/UseRequestData'
import { BaseUrl } from '../../Constants/BaseUrl'


function RestaurantCard(props) {
    
 

    return (
        
        <S.Rectangle>
        <S.AreaImg>
        <S.ImgBurguer src = {props.Photo} />
        </S.AreaImg>
        <S.AreaItensLanche>
        <S.NomeDoItem>{props.name}</S.NomeDoItem>
        <S.ItensDoLanche>{props.description}</S.ItensDoLanche>
        <S.Preco>R$ {props.price} reais </S.Preco>
        <S.ButtonAdd> <S.Adicionar>adicionar</S.Adicionar></S.ButtonAdd>
        </S.AreaItensLanche>

             
        </S.Rectangle>
    )  
}
export default RestaurantCard;