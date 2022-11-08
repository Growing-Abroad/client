import styled from 'styled-components';
import { theme } from '@styles/theme'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 2rem;
  color: ${theme.colors.primaryBlue};
  text-align: center;
  overflow-x:hidden;

  > h3 {
    font: 500 1.5rem 'Montserrat';
  }
`

export const Button = styled.button`
  background: ${theme.colors.secondaryBlue};
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02)
  }
`
