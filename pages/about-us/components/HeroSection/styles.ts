import { theme } from '@/styles/theme';
import { variables } from '@styles/global-variables';
import styled from 'styled-components';

interface IContainer {
  backgroundImg: any;
}
export const Container = styled.section<IContainer>`
  min-width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
  color: ${theme.colors.primaryBlue};
  text-align: center;
  overflow: hidden;
  
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-color: lightgray;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  > p {
    max-width: ${variables.sizes.mediaQuery};
    padding-inline: 1rem;
  }
`

export const ContentWrapper = styled.div`
  max-width: 1280px;
`

export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
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
  background-image: url(${({ background }) => background});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  height: 600px;
  width: 600px;

  &.right-wrapper {
    justify-content: flex-end;
  }

  .text-left, .text-right {
    width: 300px;
    position: absolute;
    bottom: 0;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 2rem;
  }
  
`

export const BlueSquare = styled.div`
  --blueSquareOffset: -80px;
  background: ${theme.colors.secondaryBlue}; 
  opacity: 70%;
  width: 300px;
  height: 400px;
  position: absolute;
  bottom: -225px;
  left: var(--blueSquareOffset);
  transform: rotate(25deg);
  
  &.right-image {
    left: unset;
    right: var(--blueSquareOffset);
    transform: rotate(-25deg);
  }
  .text-left {
    left: 0;
  }

  .text-right {
    right: 0;
  }


`

