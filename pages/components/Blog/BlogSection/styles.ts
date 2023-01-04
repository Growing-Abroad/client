import styled from 'styled-components';
import { theme } from '@styles/theme'
import { variables } from '@/styles/global-variables';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 80px ${variables.sizes.globalHorizontalPadding} 160px;
  color: ${theme.colors.primaryBlue};
  text-align: center;
  overflow-x:hidden;
  width: 100%;

  > h3 {
    font: 500 1.5rem 'Montserrat';
  }

  @media(max-width: ${variables.sizes.mediaQuery}) {
    padding: 80px ${variables.sizes.globalHorizontalPaddingMobile} 120px;
  }
`

export const Button = styled.button`
  background: ${theme.colors.secondaryBlue};
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02)
  }
`
