import React, { UseState } from 'react';
import * as S from '../ScreenStyled';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core'

function ShoppingCart() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <S.Container>
      <Header title={"Meu Carrinho"} />
      <S.DeliveryAddress>
        <p>Endereço de entrega</p>
        <p>Rua Alessandra Vieira, 42</p>
      </S.DeliveryAddress>
      <S.RestaurantAddress>
        <p>Bullger Vila Madalena</p>
        <p>R. Fradique Coutinho, 1136- Vila Madalena</p>
        <p>30- 45min</p>
      </S.RestaurantAddress>

        CARD COM O PRODUTO

      <S.Payment>
        <p>Frete R$6,00</p>
        <S.Subtotal>
          <p>SUBTOTAL</p>
          <p><b>R$67,00</b></p>
        </S.Subtotal>
        <p>Forma de pagamento</p>
        <hr />

        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro" />
            <FormControlLabel value="cartaodecredito" control={<Radio />} label="Cartão de crédito" />
          </RadioGroup>
        </FormControl>

      </S.Payment>

      <S.ConfirmButton>
        <Button
          variant='contained'
          color="primary"
          type="submit"
        >
          Confirmar
          </Button>
      </S.ConfirmButton>


      <Footer />
    </S.Container>
  )
}

export default ShoppingCart;