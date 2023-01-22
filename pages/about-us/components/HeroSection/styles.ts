
import {theme} from "@styles/theme";
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
  color: ${theme.colors.primaryBlue};
  text-align: center;
  overflow: hidden;

  background-image: url(${({backgroundImg}) => backgroundImg});
  background-color: lightgray;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  > p {
    max-width: 850px;
    padding-inline: 1rem;
  }
`

export const ContentWrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > p {
    padding-inline: 1rem;
  }
`

export const ImagesContainer = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${variables.sizes.mediaQuery}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export interface IImagesWrapper {
  background: string;
}

export const ImagesWrapper = styled.div<IImagesWrapper>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-image: url(${({background}) => background});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  height: 450px;
  width: 100%;

  &.right-wrapper {
    justify-content: flex-end;
  }

  .text-left, .text-right {
    /* width: 280px;
    position: absolute;
    bottom: 0;
    color: white;
    padding: 1rem 1.2rem;
    display:flex;
    align-items: flex-start;
    min-height: 115px; */
    font-size: 1.375rem;
    font-weight: 800;
    margin-top: 16px;
  }
`

export const BlueSquare = styled.div`
  --blueSquareOffset: -105px;
  background: ${theme.colors.secondaryBlue};
  opacity: 80%;
  width: 315px;
  height: 415px;
  position: absolute;
  bottom: -225px;
  left: var(--blueSquareOffset);
  transform: rotate(25deg);

  &.right-image {
    left: unset;
    right: var(--blueSquareOffset);
    transform: rotate(-25deg);
  }
`
export const TextsWrapper = styled.div`
  width: 280px;
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
`

export const BigQuote = styled.span`
  font-size: 50px;
  line-height: 15px;
`

export const TextLeft = styled.span`
  text-align: left;
  left: 0;
`

export const TextRight = styled.span`
  text-align: right;
  right: 0;
`