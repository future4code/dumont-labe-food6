import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {BaseUrl} from '../../Constants/BaseUrl'
import * as S from '../ScreenStyled'
import Header from '../../Components/Header/Header'
import { useHistory } from 'react-router-dom'
import RestaurantCard from '../../Components/RestaurantCard/RestaurantCard'
import { goToBuy } from '../../Routes/Cordinator'
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";


function Restaurant(props) {
    const [restaurantDetails, setRestaurantDetails] = useState ([])
    
    const params = useParams()
    console.log(restaurantDetails)
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
    <ChevronLeftIcon onClick={()=>goToBuy(history)}/>
    <S.RestaurantDetails>
        {restaurantDetails && restaurantDetails.restaurant && restaurantDetails.map((Item)=>{})}
    <S.AreaLogoRest>
    <S.image src = {restaurantDetails.logoUrl}/> 
    </S.AreaLogoRest>
    <S.RestaurantTitle> {restaurantDetails.name} </S.RestaurantTitle>
    <S.Burger> {restaurantDetails.category} </S.Burger>
    <S.Areatempo>
    <S.TempoDeEntrega>{restaurantDetails.deliveryTime}minutos</S.TempoDeEntrega>
    <S.Frete>Frete: {restaurantDetails.shipping} reais</S.Frete>
    </S.Areatempo>
    <S.Endereco>{restaurantDetails.address}</S.Endereco>
    </S.RestaurantDetails>
    <S.Principais>Principais</S.Principais>
    <hr />

    
        
        {restaurantDetails && restaurantDetails.products && restaurantDetails.products.map((Item)=>{ 
            return (
                <RestaurantCard 
                restaurant = {Item}
                key={Item.id}
                id={Item.id}
                name={Item.name}
                Photo={Item.photoUrl}
                description={Item.description}
                price={Item.price}
                
                />
        
        
    )})}
        
        
    
   
    

    {/* <S.Rectangle>
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

    </S.Rectangle> */}
    
        

    

    


    </S.Container>
    
    
    )}
    
  


  export default Restaurant





