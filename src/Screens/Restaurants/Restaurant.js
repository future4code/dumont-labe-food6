import React from 'react'
import * as S from '../ScreenStyled'
import Back from '../../Assets/back2.png'

function Restaurant() {
    return( 
    <S.Restaurante>
    <S.Bar>
        <S.Black>
            <S.Signal>
                <S.MobileSignal/>
                <S.Carrier>Sketch</S.Carrier>
                <S.Wifi />
            </S.Signal>
        <S.Time>9:41 AM </S.Time>
    <S.Bluetooth />
    <S.PercentualBatery>100%</S.PercentualBatery>
    <S.Charge />
    </S.Black>
    <S.back img src={Back} />
    <S.title>Restaurante</S.title>
    </S.Bar>
    </S.Restaurante>
    
    
    )}
  
//  Não consegui incluir as imagens que faltam...

  export default Restaurant





