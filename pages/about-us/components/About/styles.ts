import { open } from '@styles/animations';
import { theme } from '@styles/theme';
import { variables } from '@styles/global-variables';
import styled from 'styled-components';

export const Container = styled.section`
  width: min(100%, 1280px);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 80px ${variables.sizes.globalHorizontalPadding} 0;
  color: ${theme.colors.primaryBlue};
  font: 400 1rem 'Montserrat', sans-serif;

  @media(max-width: ${variables.sizes.mediaQuery}) {
    padding-inline: ${variables.sizes.globalHorizontalPaddingMobile};
  }
`

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: ${variables.sizes.mediaQuery}) {
    flex-direction: row;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  width: 100%;

  h3 {
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  p {
    animation: ${open} 300ms linear;
  }
`

export const More = styled.div`
  margin: 0 auto; 
  font-size: 1.5rem;

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem;
    color: ${theme.colors.secondaryBlue};
    font-weight: 700;
    border: 1px solid ${theme.colors.secondaryBlue};
    border-radius: 50%;

    &:hover{
      transform: scale(1.05);
    }
  }
`