import React from 'react';
import * as S from '../ScreenStyled'
import { useHistory } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import HistoryCard from '../../Components/HistoryCard/HistoryCard'
import { useRequestData } from '../../Hooks/UseRequestData'
import { BaseUrl } from '../../Constants/BaseUrl'
import Footer from '../../Components/Footer/Footer'
import { goToSignUpEdit, goToAddressEdit } from '../../Routes/Cordinator'





function ProfilePage() {
//   const [profile, setProfile] = React.useState([])
  
  // useProtectPage()
  const history = useHistory()
  

  // Função para pegar o histórico de pedidos
//   const getOrdersHistory = useRequestData(`${BaseUrl}/orders/history`, undefined)

//   console.log(getOrdersHistory)

  return (
    <S.Container>
         <Header title={'Meu Perfil'}/>

        <S.InfoUserContainer>
        <S.EditIconStyled fontSize={'small'} onClick={() => goToSignUpEdit(history)}/>
            <span>Maria</span>
            
            <p>e-mail@email.com</p>
            <p>333.333.333-33</p>
        </S.InfoUserContainer>

        <S.AddressUserContainer>
            <span>Endereço cadastrado</span>
            <S.EditIconStyled fontSize={'small'} onClick={() => goToAddressEdit(history)}/>
            <p>Rua Alessandra Vieira, 42 -Santa</p>
        </S.AddressUserContainer>

        <S.HistoryUserContainer>
            <p>Histório de pedidos</p>
        </S.HistoryUserContainer>

        {/* {getOrdersHistory && getOrdersHistory.posts && getOrdersHistory.posts.map((item) => {
            return ( */}
                <HistoryCard/>
            {/* )
        })} */}
        <Footer/>
    </S.Container>
  );
}
export default ProfilePage;

