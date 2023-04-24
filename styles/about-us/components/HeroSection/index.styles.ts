import { theme } from "@styles/theme";
import styled from "styled-components";
import { variables } from "@styles/global-variables";

interface IContainer {
  backgroundImg: string;
}

export const Container = styled.section<IContainer>`
  min-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 80px;
  color: ${theme.colors.blue700};
  text-align: center;
  overflow: hidden;

  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-color: lightgray;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  > p {
    max-width: 850px;
    padding-inline: 1rem;
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding-top: 20px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  > p {
    padding-inline: 1rem;
  }
`;

export const ImagesContainer = styled.div`
  width: 95vw;
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
  /* @media (max-width: 588px) {
    margin-top: -66px;
  } */
  @media (max-width: 480px) {
    margin-top: -66px;
  }
`;

export interface IImagesWrapper {
  background: string;
}

export const ImagesWrapper = styled.div<IImagesWrapper>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-image: url(${({ background }) => background});
  background-position: 90%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 450px;
  width: 100%;

  &.right-wrapper {
    justify-content: flex-end;
    background-position: 10%;
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

export const BlueSquare = styled.div`
  --blueSquareOffset: -16vw;
  background: ${theme.colors.blue500};
  width: 46vw;
  height: 500px;
  position: absolute;
  bottom: -240px;
  left: var(--blueSquareOffset);
  transform: rotate(25deg);

  &.right-image {
    left: unset;
    right: var(--blueSquareOffset);
    transform: rotate(-26.08deg);
  }

  @media (max-width: 1400px) {
    bottom: -240px;
    --blueSquareOffset: -16vw;
    width: 46vw;
  }

  @media (max-width: 1024px) {
    bottom: -260px;
    --blueSquareOffset: -34vw;
    width: 68vw;
  }

  @media (max-width: 769px) {
    width: 60vw;
  }
  @media (max-width: 700px) {
    --blueSquareOffset: -20vw;
    bottom: -325px;
    width: 50vw;
  }

  @media (max-width: 520px) {
    --blueSquareOffset: -25vw;
    width: 45vw;
  }

  @media (max-width: 480px) {
    --blueSquareOffset: -30vw;
    bottom: -370px;
  }
`;
export const TextsWrapper = styled.div`
  width: 28vw;
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

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    line-height: 25px;
  }

  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const TextRight = styled.span`
  text-align: right;
  right: 0;

  font-size: 2rem;
  line-height: 39px;
  letter-spacing: 1.3px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    line-height: 25px;
  }

  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Quote = styled.div`
  font-weight: 900;
  font-size: 8rem;
  line-height: 1.188rem;
  letter-spacing: 0.081rem;

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 520px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;
