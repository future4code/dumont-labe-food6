// import React from 'react';
import styled from  'styled-components'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'


// styled LoginPage //
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 96%;
  max-width: 465px;
  margin: 0 auto;
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40vh;
  width: 90vw;
  margin-left: 3%;

`

export const TitleLogin = styled.p`
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 16px;
  margin: 8% 35%;
`

export const TitleLogoLogin = styled.img`
  width: 150px;
  margin: 20% 32% 4%;
`
// styled LoginPage //



// styled SignUpPage //
export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 96%;
  max-width: 465px;
  margin: 0 auto;
`

export const FormSignUp = styled.form`
  display: flex;
  flex-direction: column;
  height: 25vh;
  width: 90vw;
  justify-content: space-around;
  margin-top: 30%;
  margin-left: 3%;
  margin-bottom: 5%;
`

export const TitleLogo = styled.img`
  width: 150px;
  margin: 2% 32% 6%;
`

export const TitleSignUp = styled.p`
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 16px;
  margin: 25% 35% 5%;
`

export const ChevronLeftIconStyled = styled(ChevronLeftIcon)`
  margin-bottom: 2%;
`

export const LineHeader = styled.hr`
  width: 100%;
`
// styled SignUpPage //


// styled AdressPage //
export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 96%;
  max-width: 465px;
  margin: 0 auto;
`

export const FormAdress= styled.form`
  display: flex;
  flex-direction: column;
  height: 20vh;
  width: 90vw;
  justify-content: space-around;
  margin-top: 30%;
  margin-left: 3%;
  margin-bottom: 5%;
`

export const TitleAdress = styled.p`
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 16px;
  margin: 55% 30% 5%;
`
// styled AdressPage //

