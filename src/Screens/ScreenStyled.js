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

// styled ShoppingCart //
export const Container = styled.div`
 height:640px;
 width:360px;
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 box-sizing: border-box;
 border: 1px solid black;
 `;

export const ContainerHome = styled.div`
 background-color: #e86e5a;
 height:640px;
 width:360px;
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 box-sizing: border-box;
 `;

export const ImgLogo = styled.img`
display: flex;
text-align: center;
width: 126px;
height: 65px;
padding: 288px 117px 287px;
cursor: pointer;
&:hover {
  width: 100px;
  height: 50px;
}
`;
=======

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

export const NomeDoItem = styled.div` 
  width: 166px;
  height: 18px;
  margin: 0 49px 6px 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
`
export const ItensDoLanche = styled.div` 
  width: 198px;
  height: 30px;
  margin: 6px 17px 6px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.34px;
  color: #b8b8b8;
`

export const Preco = styled.div` 
  width: 108px;
  height: 19px;
  margin: 6px 17px 15px 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`

export const RectangleAdd = styled.div` 
  width: 90px;
  height: 31px;
  margin: 9px 0 0 17px;
  padding: 8px 20.5px 9px 21.5px;
  border-radius: 8px;
  border: solid 1px var(--black);
`

export const Adicionar = styled.div` 
  width: 48px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: var(--black);
`

// styled RestaurantPage //

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