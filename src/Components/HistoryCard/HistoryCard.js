import React from 'react'
import * as S from '../ComponentsStyled'


function HistoryCard(props) {
    return(
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
           
       </S.HistoryContainer>
    )
}
export default HistoryCard