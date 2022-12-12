import { open } from '@styles/animations';
import { theme } from '@styles/theme';
import { variables } from '@../../../src/styles/global-variables';
import styled from 'styled-components';

export const Container = styled.section`
  width: min(100%, 1280px);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-top: 2rem;
  color: ${theme.colors.primaryBlue};
  font: 400 1rem 'Montserrat', sans-serif;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0  ${variables.sizes.globalHorizontalPadding};
  gap: 2rem;
  `

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  max-width: 50%;
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