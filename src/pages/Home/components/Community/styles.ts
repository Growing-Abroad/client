import styled from 'styled-components';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme'

export const Container = styled.section`
  width: min(100%, ${variables.sizes.maxWidthAll});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 80px ${variables.sizes.globalHorizontalPadding};
  text-align: center;
`

export const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  color: ${theme.colors.primaryBlue};
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    opacity: 0;
  }
`

export const Social = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const SocialImage = styled.img`
  cursor: pointer;
  height: 5rem;
  max-width: 6rem;
`

export const SocialText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .25rem;
  
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
  white-space: nowrap;
  
  width: 100%;

  > h6 {
    width: 100%;
  }

  > span {
    font-size: 1.2rem;
    font-weight: 400;
  }
`