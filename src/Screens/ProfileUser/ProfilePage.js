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
  
  // useProtectPage()
  const history = useHistory()

  // // Função que pega os dados do usuário
  const getProfile = useRequestData(`${BaseUrl}/profile`, undefined)

  console.log(getProfile)



  return  getProfile ? (
    <S.Container>
         <Header title={'Meu Perfil'}/>

        <S.InfoUserContainer>
        <S.EditIconStyled fontSize={'small'} onClick={() => goToSignUpEdit(history)}/>
           <span>Nome: {getProfile.user.name}</span>
            <p>E-mail: {getProfile.user.email}</p>
            <p>CPF: {getProfile.user.cpf}</p>
        </S.InfoUserContainer>

        <S.AddressUserContainer>
            <span>Endereço cadastrado:</span>
            <S.EditIconStyled fontSize={'small'} onClick={() => goToAddressEdit(history)}/>
            <p>{getProfile.user.address}</p>
        </S.AddressUserContainer>

        <S.HistoryUserContainer>
            <p>Histório de pedidos</p>
        </S.HistoryUserContainer>
        
        <HistoryCard/>
        <Footer/>
    </S.Container>
  ) : (<div>Carregando ...</div>)
}
export default ProfilePage;

