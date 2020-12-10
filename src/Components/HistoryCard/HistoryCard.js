import React from 'react'
import * as S from '../ComponentsStyled'
import { useRequestData } from '../../Hooks/UseRequestData'
import { BaseUrl } from '../../Constants/BaseUrl'


function HistoryCard() {
    
   // Função para pegar o histórico de pedidos
   const getOrdersHistory = useRequestData(`${BaseUrl}/orders/history`,  {
        headers: {
        auth: localStorage.getItem("token")
        }
    })

//    console.log(getOrdersHistory)

    return getOrdersHistory ? (
        <div>
            <S.noOrdersMessage> 
              Você não realizou nenhum pedido!
            </S.noOrdersMessage>
        </div>
        ) : (
       <S.HistoryContainer>
           <S.InfoHistory>
                <S.NameOrder fontSize={16}>
                    Batata frita
                </S.NameOrder>
                <p>30 de setembro 2019</p>
                <S.Price fontSize={18}>
                    SUBTOTAL R$89,00
                </S.Price>
           </S.InfoHistory>

           {/* <S.InfoHistory>
                <S.NameOrder fontSize={16}>
                    Batata frita
                </S.NameOrder>
                <p>30 de setembro 2019</p>
                <S.Price fontSize={18}>
                    SUBTOTAL R$89,00
                </S.Price>
           </S.InfoHistory>

           <S.InfoHistory>
                <S.NameOrder fontSize={16}>
                    Batata frita
                </S.NameOrder>
                <p>30 de setembro 2019</p>
                <S.Price fontSize={18}>
                    SUBTOTAL R$89,00
                </S.Price>
           </S.InfoHistory>

           <S.InfoHistory>
                <S.NameOrder fontSize={16}>
                    Batata frita
                </S.NameOrder>
                <p>30 de setembro 2019</p>
                <S.Price fontSize={18}>
                    SUBTOTAL R$89,00
                </S.Price>
           </S.InfoHistory> */}
           
       </S.HistoryContainer>
    )  
}
export default HistoryCard