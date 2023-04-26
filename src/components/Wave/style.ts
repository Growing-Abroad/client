import styled from "styled-components";

interface WrapperProps {
  height: string;
}
export const Wrapper = styled.div<WrapperProps>`
width: 100%;
  height: ${props => props.height};
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top:-150px;
  .border-image{
    width: 100%;
  }
  .candidates-img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    @media  (min-width: 1530px) {
      height: 220px;
      padding-bottom:50px;
    }
    @media  (max-width: 758px) {
      height: 240px;
      object-fit: contain;
      margin-top: 40px;
    }
  }

  @media (max-width: 758px) {
    background-position: -155px;
    justify-content: center;
    align-items: 'flex-start';

  .border-image{
    width: 100%;
    height: 154px;
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
    img{
      width: 100%;
    }

    @media (min-width: 1513px) {
      height: calc(9.625rem + ((1vw - 15.13px) * 8.0332));
      background-position: center;

    }

  }
@media (min-width: 1513px) {
  height: ${(props) => props.height}px;
}
  }`
