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
  :nth-child(1n){ 
    h1{
      text-align:center;
      display:flex;
      flex-direction:column;
      padding-bottom:104px;
    }
  }

  
  @media (max-width: ${mediaQuery}) {
    padding-bottom:93px;
    :nth-child(1n){ 
      h1{
        width:361px;
        padding-bottom:33px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:relative;
  width: 100%;
  min-width:1280px;
  background-color: white;
  padding-bottom: 150px;
  @media (max-width: ${mediaQuery}) {
    min-width:430px;
}
`;

export const Title = styled.h5`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 36px;
  position:absolute;
  top: 0;
  left:50%;
  margin-left:-56px;
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
  padding-top:152px;
  @media (max-width: 768px) {
    padding-left:60px;
    padding-top:95px;
    gap:90px;
  }
`;
interface ContentCardProps{
  reverse:boolean;
}
export const ContentCard = styled.div<ContentCardProps>`
width: 100%;
height: auto;
display: flex;
flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
gap:116px;
@media (max-width: ${mediaQuery}) {
    flex-direction: column;
    gap:18px;
    height:auto;
}
@media (min-width:1520px) {
  gap:500px;
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
    gap:20px;
    width:372px;
    height:auto;
    justify-content: flex-start;  
}
`
export const CardTitle = styled.h3`
width: 100%;
font-size:32px;
width:506px;
letter-spacing:1.3px;
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
  width:300px;
  line-height:28px;
  gap:20px;
}
`
