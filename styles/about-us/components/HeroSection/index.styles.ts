import { theme } from "@styles/theme";
import styled, { css } from "styled-components";
import { variables } from "@styles/global-variables";
import Image from "next/image";



export const Container = styled.section`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
  color: ${theme.colors.blue700};
  text-align: center;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  margin-top: 75px;
  max-height: calc(100vh - 89px);
  @media screen and (min-width: 768px){
    max-height: calc(50vh - 89px);
  }
  @media screen and (min-width: 1026px){
    max-height: calc(100vh - 89px);
  }
  > p {
    max-width: 850px;
    padding-inline: 1rem;
  }

`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  max-height: 438px;
  overflow: hidden;
  bottom: 0;
  > p {
    padding-inline: 1rem;
  }
`;

export const ImagesContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-bottom: -12px;
  gap: 160px;

  @media (min-width: ${variables.sizes.mediaQuery}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    gap: 2rem;
    flex-direction: initial;
    width: 100vw;
  }
  
  
`;


export const ImagesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 450px;
  width: 100%;

  &.right-wrapper {
    justify-content: flex-end;
  }

  .text-left,
  .text-right {
    /* width: 280px;
    position: absolute;
    bottom: 0;
    color: white;
    padding: 1rem 1.2rem;
    display:flex;
    align-items: flex-start;
    min-height: 115px; */
    margin-top: 16px;
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) {
    .text-right,
    .text-left {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    width: 50%;
    height: 380px;
    background-position: bottom;

    &.right-wrapper {
      background-position: bottom;
    }
  }

  @media (max-width: 700px) {
    height: 300px;
  }

  @media (max-width: 588px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    .text-right,
    .text-left {
      margin-bottom: 10px;
    }
  }
`;

// export const BlueSquare = styled.div`
//   --blueSquareOffset: -16vw;
//   background: ${theme.colors.blue500};
//   width: 46vw;
//   height: 500px;
//   position: absolute;
//   bottom: -240px;
//   left: var(--blueSquareOffset);
//   transform: rotate(25deg);

//   &.right-image {
//     left: unset;
//     right: var(--blueSquareOffset);
//     transform: rotate(-26.08deg);
//   }

//   @media (max-width: 1400px) {
//     bottom: -240px;
//     --blueSquareOffset: -16vw;
//     width: 46vw;
//   }

//   @media (max-width: 1024px) {
//     bottom: -260px;
//     --blueSquareOffset: -34vw;
//     width: 68vw;
//   }

//   @media (max-width: 769px) {
//     width: 60vw;
//   }
//   @media (max-width: 700px) {
//     --blueSquareOffset: -20vw;
//     bottom: -325px;
//     width: 50vw;
//   }

//   @media (max-width: 520px) {
//     --blueSquareOffset: -25vw;
//     width: 45vw;
//   }

//   @media (max-width: 480px) {
//     --blueSquareOffset: -30vw;
//     bottom: -370px;
//   }
// `;

export const TextsWrapper = styled.div`
  width: 75%;
  position: absolute;
  bottom: 0;
  color: white;
  padding: 1rem 1.2rem;
  min-height: 160px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.reverse {
    align-items: flex-end;
  }

  @media (min-width: 1025px) and (max-width: 1305px) {
    padding: 0;
  }

  @media (max-width: 1024px) {
    width: 40vw;
  }

  @media (max-width: 769px) {
    width: 45vw;
  }

  @media (max-width: 700px) {
    width: 40vw;
    padding: 5rem 1.2rem 0;
  }

  @media (max-width: 480px) {
    width: 43vw;
    height: 200px;
    justify-content: space-between;
    padding: 5.5rem 1.2rem 5px;
  }
`;

export const BigQuote = styled.span`
  font-size: 50px;
  line-height: 15px;
`;

export const TextLeft = styled.span`
  text-align: left;
  left: 0;
  width: 90%;

  font-size: 2rem;
  line-height: 39px;
  letter-spacing: 1.3px;
  font-weight: 600;
  white-space: pre-wrap;


  @media (min-width: 1025px) and (max-width: 1305px) {
    width: auto;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.sizes.mediaQuery}) and (max-width: 1514px) {
      font-size: calc(12px + (32 - 12) * ((100vw - 768px) / (1514 - 768)));
      line-height: calc(
        14.63px + (39.01 - 14.63) * ((100vw - 768px) / (1514 - 768))
      );
    }

    @media (max-width: ${theme.sizes.mediaQuery}) {
      width: 100%;
      font-size: 12px;
      line-height: 14.63px;
    }
  `}
`;

export const TextRight = styled.span`
  text-align: right;
  right: 0;

  font-size: 2rem;
  line-height: 39px;
  letter-spacing: 1.3px;
  font-weight: 600;

  @media (min-width: 1025px) and (max-width: 1305px) {
    width: auto;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.sizes.mediaQuery}) and (max-width: 1514px) {
      font-size: calc(12px + (32 - 12) * ((100vw - 768px) / (1514 - 768)));
      line-height: calc(
        14.63px + (39.01 - 14.63) * ((100vw - 768px) / (1514 - 768))
      );
    }

    @media (max-width: ${theme.sizes.mediaQuery}) {
      font-size: 12px;
      line-height: 14.63px;
    }
  `}
`;

export const Quote = styled.div`
  font-weight: 900;
  font-size: 8rem;
  line-height: 1.188rem;
  letter-spacing: 0.081rem;

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      font-size: 4rem;
      letter-spacing: 0;
      line-height: 0.5rem;
    }
  `};

  @media (max-width: 520px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;


export const UIImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: top;
  @media screen and (min-width: 769px) {
    margin-top: 0;
    height: 100vh;

  }
  
`