import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme'
import styled from 'styled-components';

export const Container = styled.section`
  width: min(100%, ${variables.sizes.maxWidthAll}); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 2rem;
  color: ${theme.colors.primaryBlue};
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }

`
export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  height: 100%;
  position: relative;

  > h3 {
    font: 500 1.75rem 'Montserrat', sans-serif;
    z-index: 10;
  }

  > p {
    text-align: justify;
    letter-spacing: 1px;
    z-index: 10;
  }

  @media (min-width: 768px) {
    border-left: 2px solid ${theme.colors.primaryBlue}; 
    z-index: 10;
  }
`


export const WhiteTriangle = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 0.2rem;
  transform: rotate(45deg);
  top: -1rem;
  width: 200px;
  height: 200px;
  z-index: 0;
`