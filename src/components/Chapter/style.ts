import styled from 'styled-components';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';

const {
  colors: { primaryYellow, primaryBlue,secondaryBlue, blue500, white },
} = theme;
const {
  sizes: {
    maxWidthAll,
    mediaQuery,
  },
} = variables;



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  @media (max-width: ${mediaQuery}) {

  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width:1280px;
  height: 100%;
  background-color: white;
  @media (max-width: ${mediaQuery}) {
    min-width:430px;
}
`;

export const Title = styled.h5`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 36px;
  color:${secondaryBlue};
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:150px;
  width: 100%;
  height: 100%;
  background-color: white;
`;
interface ContentCardProps{
  reverse:boolean;
}
export const ContentCard = styled.div<ContentCardProps>`
width: 100%;
height: 373px;
display: flex;
flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
gap:116px;
@media (max-width: ${mediaQuery}) {
    flex-direction: column;
    gap:100px;
    height:500px;
}
`
export const CardInfo = styled.div`
width: 500px;
height: 373px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
gap:51px;
div{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:29px;
}
@media (max-width: ${mediaQuery}) {
    gap:32px;
    width:372px;
    justify-content: flex-end ;
}
`
export const CardTitle = styled.h3`
width: 100%;
font-size:32px;
letter-spacing:1.3px;
white-space:nowrap;
font-weight: 600;
color:${primaryBlue};
@media (max-width: ${mediaQuery}) {
    white-space: normal;
    width:327px;
  }
`
export const CardText = styled.p`
padding:0px;
margin:0px;
display: flex;
align-items: center;
justify-content: start;
height:36px;
font-size: 16px;
letter-spacing: 0.04em;
gap:26px;
color:${primaryBlue};
@media (max-width: ${mediaQuery}) {
  height:auto;
}
`
