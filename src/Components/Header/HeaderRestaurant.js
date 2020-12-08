import React from 'react'
import * as S from '../ComponentsStyled'
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import WifiIcon from '@material-ui/icons/Wifi';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';


function HeaderRestaurant(props) {
    return (
        <S.HeaderContainerR>
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
            <S.ChevronLeftIconStyled/>
            <p>Restaurante</p>
        </S.HeaderContainerR>
    )
}

export default HeaderRestaurant;