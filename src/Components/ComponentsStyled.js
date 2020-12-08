import styled from 'styled-components';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

export const Footer = styled.div`
  display:flex;
  justify-content:space-between;
  width:360px;
  height:49px;
  align-items:center;
  padding:5px;
  box-sizing: border-box;
  border: 1px solid black;
  bottom: 0;
  position: fixed
   `;

export const HeaderContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 360px;
    height: 64px;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 5px 0;
    font-size: 14px;
        p{
            width:100%;
            text-align: center;
            font-size: 16px;
        }
    `;


export const ChevronLeftIconStyled = styled(ChevronLeftIcon)`
margin: 4% 0 2%;
`
export const HeaderStart = styled.div`
    display: flex;
`

export const HeaderMain = styled.div`
   margin: 0 auto;
`
export const HeaderEnd = styled.div`
    display: flex;
`
export const Divisao = styled.div`
  text-align: center;
  color: red;
  margin-top: 80px;
`;
