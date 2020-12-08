import React from 'react'
import * as S from '../ScreenStyled'
import Header from '../../Components/Header/Header'
import Hamburguer from '../../Assets/hamburguer.png'
import MaoSanta from '../../Assets/burguerpqn.jpg'


function Restaurant() {
    return( 

    <S.Container>
    <Header title={"Restaurante"}/>
    <S.RestaurantDetails>
    <S.image> <img img src = {Hamburguer}/> </S.image >
    <S.RestaurantTitle> Bullguer Vila Madalena </S.RestaurantTitle>
    <S.Burger> Burguer </S.Burger>
    <S.TempoDeEntrega>50 - 60 min</S.TempoDeEntrega>
    <S.Frete>Frete R$6,00</S.Frete>
    <S.Endereco>R. Fradique Coutinho, 1136 - Vila Madalena</S.Endereco>
    </S.RestaurantDetails>
    <S.Principais>Principais</S.Principais>
    <S.Path />
    <S.ItemCard>
    <S.Rectangle>
        <S.MaoSantaBurguer> <img img src = {MaoSanta}/> </S.MaoSantaBurguer>
    <S.NomeDoItem>Bullguer</S.NomeDoItem>
    <S.ItensDoLanche>Pão, carne. queijo, picles e molho.</S.ItensDoLanche>
    <S.Preco>R$20,00</S.Preco>
    <S.RectangleAdd><S.Adicionar>adicionar</S.Adicionar></S.RectangleAdd>
    </S.Rectangle>
    </S.ItemCard>
    <S.ItemCard>
    <S.Rectangle>
        <S.MaoSantaBurguer> <img img src = {MaoSanta}/> </S.MaoSantaBurguer>
    <S.NomeDoItem>Stencil</S.NomeDoItem>
    <S.ItensDoLanche>Pão, carne, queijo, cebola roxa, tomate, alface e molho.</S.ItensDoLanche>
    <S.Preco>R$23,00</S.Preco>
    <S.RectangleAdd><S.Remover>Remover</S.Remover></S.RectangleAdd>
    </S.Rectangle>
    </S.ItemCard>
    <S.Acompanhamentos>Acompanhamentos</S.Acompanhamentos>
    <S.Path />
    <S.Rectangle>
    <S.NomeDoItem>Cheese Fries</S.NomeDoItem>
    <S.ItensDoLanche>Porção de fritas temperada com páprica e queijo derretido.</S.ItensDoLanche>
    <S.Preco>R$15,00</S.Preco>
    <S.RectangleAdd><S.Adicionar>adicionar</S.Adicionar></S.RectangleAdd>  
    </S.Rectangle>
    </S.Container>
    
    
    )}
  


  export default Restaurant





