import styled from 'styled-components'

 export const BackgroundHome=styled.div`
display:flex;
align-items:center;
 width:100vw;
 height:100vh;
 background-color: #e86e5a;
 `
  export const Footer=styled.div`
  display:flex;
  justify-content:space-between;
  width:360px;
  height:49px;
  align-items:center;
  padding:5px;
  box-sizing: border-box;
  border: 1px solid black;
   `

 export const ImgLogo=styled.img`
  display:flex;
  text-align:center;
  width: 126px;
  height: 65px;
  margin-left:45%;
  cursor: pointer;
  &:hover {
    width: 200px;
  height: 200px;
 `

export const HeaderContainer=styled.div`
    display: flex;
    align-items: center;
    width: 360px;
    height: 64px
    justify-content: space-between;
    border: 1px solid black;
    box-sizing: border-box;
    `

export const HeaderStart = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const HeaderMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
` 
export const HeaderEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-left: 60px;
`