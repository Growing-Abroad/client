import styled from "styled-components";

interface WrapperProps {
  height: string;
}
export const Wrapper = styled.div<WrapperProps>`
width: 100%;
  height: 40rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  position: relative;
  .border-image{
    width: 100%;
  }

  @media (max-width: 430px) {
  .border-image{
    width: 100%;
    height: 154px;
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;

    @media (max-width: 1513px) {
      height: calc(9.625rem + ((1vw - 15.13px) * 8.0332));
      background-position: center;

    }
    @media (max-width: 430px) {
      height: 67px;
      background-position: center;
    }

  }

  @media (max-width: 430px) {
    justify-content: center;
    align-items: 'flex-start';
    height: 14rem;

  }
@media (min-width: 1513px) {
  height: ${(props) => props.height}px;
}
`;
