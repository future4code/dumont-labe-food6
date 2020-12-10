import React from 'react';
import * as S from '../ScreenStyled'
import { useHistory } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import HistoryCard from '../../Components/HistoryCard/HistoryCard'
import { useRequestData } from '../../Hooks/UseRequestData'
import { useProtectPage } from '../../Hooks/UseProtectPage'
import { BaseUrl } from '../../Constants/BaseUrl'
import Footer from '../../Components/Footer/Footer'
import { goToSignUpEdit, goToAddressEdit } from '../../Routes/Cordinator'



function ProfilePage() {
  
  useProtectPage() //Proteção da página

  const history = useHistory()


  // Função que pega os dados do usuário
  const getProfile = useRequestData(`${BaseUrl}/profile`, undefined)

  console.log(getProfile)



  return  getProfile ? (
    <S.Container>
      <Header title={'Meu Perfil'}/>
        <S.LineHeader/>

        <S.InfoUserContainer>
        <S.EditIconStyled fontSize={'small'} onClick={() => goToSignUpEdit(history)}/>
          <span>Nome: {getProfile.user.name}</span>
          <p>E-mail: {getProfile.user.email}</p>
          <p>CPF: {getProfile.user.cpf}</p>
        </S.InfoUserContainer>
        <S.LineHeader/>

        <S.AddressUserContainer>
          <span>Endereço cadastrado:</span>
          <S.EditIconStyled fontSize={'small'} onClick={() => goToAddressEdit(history)}/>
          <p>{getProfile.user.address}</p>
        </S.AddressUserContainer>
        <S.LineHeader/>

        <S.HistoryUserContainer>
          <p>Histório de pedidos</p>
        </S.HistoryUserContainer>
        <S.LineHeader/>

        <HistoryCard/>
      <Footer/>
    </S.Container>
  ) : (
    <S.Container>
      <S.CircularProgressStyled 
        color='primary'
      />
    </S.Container>
  )
}
export default ProfilePage;

