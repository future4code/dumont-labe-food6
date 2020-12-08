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

// styled RestaurantPage //

export const Restaurant = styled.div`  
  height: 834px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 85vw;
  max-width: 465px;
  margin: 0 auto;
  border: 1px solid black;
  box-sizing: border-box;
`


export const title = styled.div`
  height: 44px;
  margin: 20px 92px 0 54px;
  padding: 13px 45.5px 12px;
`

export const image = styled.div`
  width: 328px;
  height: 120px;
  margin: 17px 16px 12px;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const RestaurantTitle = styled.div`
  width: 328px;
  height: 18px;
  margin: 12px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
`
export const Burger  = styled.div`
  width: 104px;
  height: 18px;
  margin: 8px 8px 8px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export const TempoDeEntrega  = styled.div`
  width: 104px;
  height: 18px;
  margin: 8px 8px 10px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`


export const Frete  = styled.div`
  width: 104px;
  height: 18px;
  margin: 8px 128px 10px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`


export const Endereco  = styled.div`
  width: 328px;
  height: 18px;
  margin: 10px 16px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export const Principais = styled.div`
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`
export const Path = styled.div`
  width: 328px;
  height: 1px;
  margin: 0 0 6px;
  border: solid 1px var(--black);
`

export const Rectangle = styled.div` 
  width: 328px;
  height: 112px;
  margin: 7px 0 0;
  padding: 18px 0 0 113px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`

export const MaoSantaBurguer = styled.div` 
  width: 97px;
  height: 112.6px;
  object-fit: contain;
`
// styled RestaurantPage //