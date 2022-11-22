import { open } from '@styles/animations';
import { theme } from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.section`
  width: min(100%, 1440px);
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
  flex-wrap: wrap;
  padding: 0 1rem;
  gap: 2.5rem;
`

export const Text = styled.div`
  display:flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 40rem;

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