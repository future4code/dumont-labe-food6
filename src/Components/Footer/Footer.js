import React from 'react';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import * as S from '../ComponentsStyled';

function Footer() {
  return (
<S.Footer>
<HomeIcon fontSize="large"/>
<LocalGroceryStoreIcon fontSize="large"/>
<PersonIcon fontSize="large"/>

</S.Footer>

  )
}

export default Footer;
