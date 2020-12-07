// import React from 'react';
import styled from  'styled-components'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'


// styled LoginPage //
export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 85vw;
  max-width: 465px;
  margin: 0 auto;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 38vh;
  justify-content: space-around;

`

export const TitlePage = styled.h2`
  font-family: Roboto, Helvetica, sans-serif;
  margin: 15% 35%;
`
// styled LoginPage //



// styled SignUpPage //
export const SignupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 85vw;
  max-width: 465px;
  margin: 0 auto;
`

export const FormSignUp = styled.form`
  display: flex;
  flex-direction: column;
  height: 30vh;
  justify-content: space-around;
  margin-bottom: 15px;
`

export const TitleLogo = styled.img`
  width: 200px;
  margin: 18% 22% 4%;
`

export const ChevronLeftIconStyled = styled(ChevronLeftIcon)`
  margin: 4% 0 2%;
`

export const LineHeader = styled.hr`
  width: 108%;
`
// styled SignUpPage //