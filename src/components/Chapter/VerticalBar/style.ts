import styled from 'styled-components';

interface VerticalBarProps{
backgroundColor?: string;
color?: string;
height?: number;
}
export const VerticalBar = styled.div<VerticalBarProps>`
  width: 10px;
  background-color: #ccc;
  height:446px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:relative;
  :last-child{
    height:0;
  }
  @media(max-width:758px){
    height:${props => `${props.height}px`};
  }
`;
export const VerticaProgressBar = styled.div<VerticalBarProps>`
width: 10px;
  background-color:${props => props.backgroundColor};
  height:${props => `${props.height}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:absolute;
  top:0;
  left:0;

`


export const IndexCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ccc;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  position:relative;
  @media(max-width:758px){
    width:40px;
    height:40px;
    font-size: 20px;
  }
`;
export const IndexCircleProgress= styled.div<VerticalBarProps>`
width: 80px;
border-radius: 50%;
background-color:${props => props.backgroundColor};
height:80px;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
font-weight: bold;
position:absolute;
opacity:0;
@media(max-width:758px){
  width:40px;
  height:40px;
  font-size: 20px;
}

`
