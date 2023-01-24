import styled from 'styled-components';
import {theme} from "@styles/theme";
import { variables } from '@/styles/global-variables';


export const Container = styled.div`  
  width: 100%;
  max-width: 306px;
  min-width: 255px;
  display: flex;
  flex-direction: column;
  outline: 2px solid lightgray;
  border-radius: 8px;
  text-align: center;
  color: ${theme.colors.primaryBlue};
  overflow: hidden;
  transition: all 450ms;

  &:hover {
    transform: scale(1.05);
    outline: 7px solid ${theme.colors.secondaryBlue};
  }

  img {
    width: 100%;
    height: 200px;
  }
`

export const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 1rem;
`

export const CardHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  font-size: 1.5rem;
  h2 {
    font-weight: 700;
  }
  h3 {
    font-size: 1rem;
    font-weight: 600;
  }
`
export const CardDescriptions = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: .75rem;
  line-height: 1rem;
  text-align: left;
  font-weight: 500;

  > div {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .star {
    flex-shrink: 0;
    color: yellow;
    width: 1.75rem;
    height: 1.75rem;
    color: ${theme.colors.primaryYellow}
  }
`

export const PostText = styled.p`
  text-transform: capitalize;
  color: ${theme.colors.primaryBlue};
`

export const Button = styled.button`
  background: ${theme.colors.secondaryBlue};
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 16px 24px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02)
}
`