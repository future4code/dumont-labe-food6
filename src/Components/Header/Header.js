import React from 'react'
import * as S from '../ComponentsStyled'
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import WifiIcon from '@material-ui/icons/Wifi';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';

function Header() {
    return (
        <S.HeaderContainer>
            <S.HeaderStart>
                <SignalCellularAltIcon />
            <p>Sketch</p>
            <WifiIcon />
            </S.HeaderStart>
            <S.HeaderMain>9:41 AM</S.HeaderMain>
            <S.HeaderEnd>
                <BluetoothIcon />
            <p>100%</p>
        <BatteryFullIcon />
            </S.HeaderEnd>


        </S.HeaderContainer>
    )
}



export default Header;