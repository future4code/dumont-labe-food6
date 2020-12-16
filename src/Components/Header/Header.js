import React from 'react'
import * as S from '../ComponentsStyled'
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import WifiIcon from '@material-ui/icons/Wifi';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';

function Header(props) {
    return (
        <S.HeaderContainer>
            <S.HeaderStart>
                <SignalCellularAltIcon style={{ fontSize: 16 }} />
            Sketch
            <WifiIcon style={{ fontSize: 16 }} />
            </S.HeaderStart>
            <S.HeaderMain>9:41 AM</S.HeaderMain>
            <S.HeaderEnd>
                <BluetoothIcon style={{ fontSize: 16 }} />
            100%
        <BatteryFullIcon style={{ fontSize: 16 }} />
            </S.HeaderEnd>
            <p>{props.title}</p>
            <p>{props.button}</p>
        </S.HeaderContainer>
    )
}

export default Header;
// <ButtonUsuario>
// {props.currentScreen ?
// <UsuarioImg src={addusuario} onClick={props.goCard} alt='usuario' /> 
// :
// <UsuarioImg src={trocausuario} onClick={props.goCard} alt='usuario' /> 
// }
// </ButtonUsuario>