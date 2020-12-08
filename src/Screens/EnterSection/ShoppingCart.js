import React from 'react';
import * as S from '../ScreenStyled';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


function ShoppingCart() {
  return (
    <S.Container>
        <Header title={"Meu Carrinho"}/>
        <DeliveryAddress>
        <p>Endereço de entrega</p>
        <p>Rua Alessandra Vieira, 42</p>
        </DeliveryAddress>
        <p>Bullger Vila Madalena</p>
        <p>R. Fradique Coutinho, 1136- Vila Madalena</p>
        <p>30- 45min</p>

        Frete R$6,00
        Subtotal R$67,00

        Forma de pagamento
        <hr/>
        Dinheiro
        Cartão de crédito
        <button>Confirmar</button>

        <Footer />
    </S.Container>
  )
}

export default ShoppingCart;