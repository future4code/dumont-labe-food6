import React from 'react';
import { useHistory } from 'react-router-dom'
import { goToProfilePage, goToShoppingCart, goToBuy } from '../../Routes/Cordinator'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import * as S from '../ComponentsStyled';


function Footer() {
  const history = useHistory()

  return (
    <S.Footer>
      <HomeIcon 
        fontSize="large"
        color='secondary'  
        onClick={() => goToBuy(history)}
      />
      <LocalGroceryStoreIcon 
        fontSize="large" 
        color='secondary' 
        onClick={() => goToShoppingCart(history)}
      />
      <PersonIcon 
        fontSize="large" 
        color='secondary' 
        onClick={() => goToProfilePage(history)}
      />
    </S.Footer>
  )
}

export default Footer;
