import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components';
import {theme} from "@styles/theme";


interface IPostText extends ComponentPropsWithoutRef<'p'> {
  size?: string | number
  weight?: number
}

export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  max-width: 100%;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  text-align: center;

  > section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem 1rem;
  }
`
export const PostImage = styled.img`
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
`

export const PostText = styled.p<IPostText>`
  text-transform: capitalize;
  font-size: ${props => `${props.size || 1}rem`};
  font-weight: ${props => props.weight || 400};
  color: ${theme.colors.primaryBlue};
`
