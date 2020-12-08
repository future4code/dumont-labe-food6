import React from 'react';
import * as S from '../ScreenStyled'
import { useHistory } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import HistoryCard from '../../Components/HistoryCard/HistoryCard'
import { useRequestData } from '../../Hooks/UseRequestData'
import { BaseUrl } from '../../Constants/BaseUrl';
import Footer from '../../Components/Footer/Footer'




function ProfilePage() {
//   const [profile, setProfile] = React.useState([])
  
  // useProtectPage()
  const history = useHistory()
  

  // Função para pegar o histórico de pedidos
  const getOrdersHistory = useRequestData(`${BaseUrl}/orders/history`, undefined)

//   console.log(getOrdersHistory)

  return (
    <S.Container>
        <Header title={'Meu Perfil'}/>

        <S.InfoUserContainer>
        <span>Nome usuário</span>
        <S.EditIconInfo fontSize={'small'}/>
        <p>e-mail</p>
        <p>CPF</p>
        </S.InfoUserContainer>

        <S.AddressUserContainer>
        <span>Endereço cadastrado</span>
        <S.EditIconInfo fontSize={'small'}/>
        <p>dados do endereço</p>
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

