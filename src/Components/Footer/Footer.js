import React from 'react';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import * as S from '../ComponentsStyled';

function Footer() {
  return (
<S.Footer>
<LocalGroceryStoreIcon/>
<PersonIcon />
<HomeIcon/>
</S.Footer>

  )
}

export default Footer;
