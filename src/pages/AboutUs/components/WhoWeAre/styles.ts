import { theme } from '@/styles/theme';
import { variables } from '@styles/global-variables';
import styled  from 'styled-components';

export const Container = styled.section`
  width: min(100%, ${variables.sizes.maxWidthAll}); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 2rem;
  font: 400 1rem 'Montserrat';
`

export const Paragraph = styled.p`
  display:flex;
  flex-direction: column;
  gap: 1rem;
  color: ${theme.colors.primaryBlue}
`