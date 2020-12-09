import styled from 'styled-components';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { mainGray, mainColor } from '../Constants/Colors';

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


// Styled HistoryCard //
export const HistoryContainer = styled.div`
  margin: 4% 5%;
  overflow-y: auto;
  max-height: 200px;
`

export const InfoHistory = styled.div`
  border: 1px solid ${mainGray};
  border-radius: 10px;
  font-size: 12px;
  padding: 2% 4%;
  margin-bottom: 5%;
  height: 124px;
`

export const NameOrder = styled.p`
font-size: ${props => `${props.fontSize}px`};
  color: ${mainColor};
  font-weight: bolder;
`

export const Price = styled.p`
  font-weight: bolder;
  font-size: ${props => `${props.fontSize}px`};
`

export const noOrdersMessage = styled.div`
  color: ${mainColor};
  margin: 20% 10%;
  font-weight: bolder;
`
