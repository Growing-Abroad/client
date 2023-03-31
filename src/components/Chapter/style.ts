import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
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
`;

export const Title = styled.h5`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 36px;
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
`
export const CardTitle = styled.h3`
width: 100%;
font-size:32px;
letter-spacing:1.3px;
white-space:nowrap;
font-weight: 600;
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
`
