import React from 'react'
import * as S from '../ScreenStyled'
import Header from '../../Components/Header/Header'
import Hamburguer from '../../Assets/hamburguer.png'
import MaoSanta from '../../Assets/burguerpqn.jpg'
import FrenchFries from '../../Assets/frenchfries.jpeg'
import OnionRings from '../../Assets/onionrings.jpeg'

function Restaurant() {
    return( 

    <S.Container>
    <Header title={"Restaurante"}/>
    <S.RestaurantDetails>
    <S.image> <img img src = {Hamburguer}/> </S.image >
    <S.RestaurantTitle> Bullguer Vila Madalena </S.RestaurantTitle>
    <S.Burger> Burguer </S.Burger>
    <S.Areatempo>
    <S.TempoDeEntrega>50 - 60 min</S.TempoDeEntrega>
    <S.Frete>Frete R$6,00</S.Frete>
    </S.Areatempo>
    <S.Endereco>R. Fradique Coutinho, 1136 - Vila Madalena</S.Endereco>
    </S.RestaurantDetails>
    <S.Principais>Principais</S.Principais>
    <hr />

    
        <S.Rectangle>
        <S.AreaImg>
        <S.ImgBurguer src = {MaoSanta} />
        </S.AreaImg>
        <S.AreaItensLanche>
        <S.NomeDoItem>Bullguer</S.NomeDoItem>
        <S.ItensDoLanche>Pão, carne. queijo, picles e molho.</S.ItensDoLanche>
        <S.Preco>R$20,00</S.Preco>
        <S.ButtonAdd> <S.Adicionar>adicionar</S.Adicionar></S.ButtonAdd>
        </S.AreaItensLanche>
        
    </S.Rectangle>
   
    

    <S.Rectangle>
        <S.AreaImg>
        <S.ImgBurguer src = {Hamburguer} />
        </S.AreaImg>
        <S.AreaItensLanche>
        <S.NomeDoItem>Stencil</S.NomeDoItem>
        <S.ItensDoLanche>Pão, carne, queijo, cebola roxa, tomate, alface e molho.</S.ItensDoLanche>
        <S.Preco>R$23,00</S.Preco>
        <S.ButtonAddR> <S.Remover>remover</S.Remover></S.ButtonAddR>
        </S.AreaItensLanche>
    </S.Rectangle>   

    <S.Acompanhamentos>Acompanhamentos</S.Acompanhamentos>
    <hr />
    <S.Rectangle>

        <S.AreaImg>
        <S.ImgBurguer src = {FrenchFries} />
        </S.AreaImg>
        <S.AreaItensLanche>
        <S.NomeDoItem>Cheese Fries</S.NomeDoItem>
        <S.ItensDoLanche>Porção de fritas temperada com páprica e queijo derretido.</S.ItensDoLanche>
        <S.Preco>R$15,00</S.Preco>
        <S.ButtonAdd> <S.Adicionar>adicionar</S.Adicionar></S.ButtonAdd>
        </S.AreaItensLanche>

    </S.Rectangle>

    <S.Rectangle>

        <S.AreaImg>
        <S.ImgBurguer src = {OnionRings} />
        </S.AreaImg>
        <S.AreaItensLanche>
        <S.NomeDoItem>Onion Rings</S.NomeDoItem>
        <S.ItensDoLanche>Porção de cebolas empanadas.</S.ItensDoLanche>
        <S.Preco>R$20,00</S.Preco>
        <S.ButtonAdd> <S.Adicionar>adicionar</S.Adicionar></S.ButtonAdd>
        </S.AreaItensLanche>

    </S.Rectangle>
    
        

    

    


    </S.Container>
    
    
    )}
  


  export default Restaurant





