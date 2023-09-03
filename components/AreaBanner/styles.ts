import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Paragraph = styled.p`
  margin: 0;
  max-width: 953px;
  color: #05335B;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 30px;
  @media screen and (min-width: 1026px) {
    font-size: 24px;
    margin-bottom: 62px;

  }
`

export const Section = styled.section`
      max-width: 1513px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    margin-top: 50px;
`


export const ContainerItens = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 29px;
`

export const TitleItem = styled.h3`
  color: #FFF;
  font-size: 29px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.3px;
  text-transform: capitalize;
`


export const SubTitle = styled.h4`
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; 
  @media screen and (min-width: 1020px){
   font-size: 27px;
  }
`

export const Item = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  div {
    background: transparent;
    h4 {
      display: none;
    }
  }
  &:hover {
    div {
      background: rgba(0, 115, 207, 0.70);
      h4 {
        display: flex;
      }
    }
  }
`


export const ImageUI = styled(Image)`
  height: auto;
  width: 100%;
  max-height: 331px;
`

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 18px;
`

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 600;
    color: #05335B;
    background: #FFDB5C;
    box-shadow: 0 15px 30px #00000040;
    text-decoration: none;
    margin-top: 70px;
    @media (min-width: 1026px) {
        padding: 20px 40px;
        font-size: 1.25rem;
        border-radius: 3rem;
    }
`;