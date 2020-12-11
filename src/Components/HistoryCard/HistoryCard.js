import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from '../ComponentsStyled'
import { useRequestData } from '../../Hooks/UseRequestData'
import { BaseUrl } from '../../Constants/BaseUrl'


function HistoryCard(props) {
    const [orderHistory, setOrderHistory] = useState ([])

    // Para pegar a data correta do pedido
    const date = new Date(props.date);
    let options = { day: "numeric", month: "long", year: "numeric" };
    const newDate = date.toLocaleDateString("pt-PT", options);
    const formatDate = newDate.split("de ");

    
    
   // Função para pegar o histórico de pedidos
    useEffect (() => {
        getOrdersHistory ()
    },[])

    const getOrdersHistory  = () => {
        axios.get(`${BaseUrl}/orders/history`,
        {
            headers:{
                auth:localStorage.getItem ("token")
            }
        })
        .then((response) => {
            setOrderHistory(response.data)
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }

    return orderHistory ? (
        <div>
            <S.noOrdersMessage> 
              Você não realizou nenhum pedido!
            </S.noOrdersMessage>
        </div>
    ) : (
        <S.HistoryContainer>
            <S.InfoHistory>
                <S.NameOrder fontSize={16}>
                  {orderHistory.name}
                </S.NameOrder>
                <p>{formatDate}</p>
                <S.Price fontSize={18}>
                    SUBTOTAL R${orderHistory.totalPrice}
                </S.Price>
            </S.InfoHistory>
        </S.HistoryContainer>
    )  
}
export default HistoryCard