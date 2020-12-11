import React, { useEffect, useState } from 'react';
import axios from 'axios'
import * as S from '../ScreenStyled'
import { useHistory } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import HistoryCard from '../../Components/HistoryCard/HistoryCard'
import { BaseUrl } from '../../Constants/BaseUrl'
import Footer from '../../Components/Footer/Footer'
import { goToSignUpEdit, goToAddressEdit } from '../../Routes/Cordinator'



function ProfilePage() {
  const [profile, setProfile] = useState (undefined)
  

  const history = useHistory()


  // Função que pega os dados do usuário
  useEffect (() => {
    getProfile ()
  },[])

  const getProfile  = () => {
    axios.get(`${BaseUrl}/profile`,
      {
          headers:{
              auth:localStorage.getItem ("token")
          }
      })
    .then((response) => {
        setProfile(response.data.user)
    })
    .catch((error)=>{
        console.log(error)
    })  
  }



  return  profile ? (
    <S.Container>
      <Header title={'Meu Perfil'}/>
        <S.LineHeader/>

        <S.InfoUserContainer>
        <S.EditIconStyled fontSize={'small'} onClick={() => goToSignUpEdit(history)}/>
          <span>Nome: {profile.name}</span>
          <p>E-mail: {profile.email}</p>
          <p>CPF: {profile.cpf}</p>
        </S.InfoUserContainer>
        <S.LineHeader/>

        <S.AddressUserContainer>
          <span>Endereço cadastrado:</span>
          <S.EditIconStyled fontSize={'small'} onClick={() => goToAddressEdit(history)}/>
          <p>{profile.address}</p>
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

