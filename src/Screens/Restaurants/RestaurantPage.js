import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {BaseUrl} from '../../Constants/BaseUrl'
import * as S from '../ScreenStyled'
import Header from '../../Components/Header/Header'
import Hamburguer from '../../Assets/hamburguer.png'
import MaoSanta from '../../Assets/burguerpqn.jpg'
import FrenchFries from '../../Assets/frenchfries.jpeg'
import OnionRings from '../../Assets/onionrings.jpeg'
import { useHistory } from 'react-router-dom'



function Restaurant(props) {
    const [restaurantDetails, setRestaurantDetails] = useState ([])
    
    const params = useParams()
    
    useEffect (()=>{
        getRestaurantDetails ()
    },[])

    const getRestaurantDetails = () => {
        axios.get (`${BaseUrl}/restaurants/${params.id}`,
        {
            headers:{
                auth:localStorage.getItem ("token")
            }
        })
        .then((response) => {
            setRestaurantDetails(response.data.restaurant)
            console.log (response.data.restaurant)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }

    const history = useHistory()
    console.log (props.id)

    return( 

    <S.Container>
    <Header title={"Restaurante"}/>
    <S.RestaurantDetails>
        {restaurantDetails && restaurantDetails.restaurant && restaurantDetails.map((Item)=>{})}
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





