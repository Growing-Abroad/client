import { theme } from '@/styles/theme';
import { variables } from '@styles/global-variables';
import styled  from 'styled-components';

export const Container = styled.section`
  width: min(100%, 1440px);
  background: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
  color: ${theme.colors.primaryBlue};
  text-align: center;
  overflow-x: none;
  
  > p {
    max-width: ${variables.sizes.mediaQuery};
  }
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

export const ImagesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  img {
    width: 100%;
  }

  .text-left, .text-right {
    width: 100%;

    position: absolute;
    bottom: 0;
    background: ${theme.colors.secondaryBlue}; 
    color: white;
    opacity: 70%;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 2rem;
  }

  .text-left {
    left: 0;
  }

  .text-right {
    right: 0;
  }
`

