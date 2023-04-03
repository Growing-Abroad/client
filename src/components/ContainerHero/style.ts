import styled from "styled-components";

import { theme } from '@styles/theme';
import { variables } from "@/styles/global-variables";
const {
  colors: { blue400, blue700, white },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;


interface IContainerProps{
  backgroundImage:string
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  background-image: url('${({backgroundImage})=>backgroundImage}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  height: 40rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: ${mediaQuery}) {
      background-position: center;
      
    }

  .border-image{
    width: 100%;
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;

    @media (max-width: 1513px) {
      height: calc(9.625rem + ((1vw - 15.13px) * 8.0332));
      background-position: center;
      
    }
    @media (max-width: 430px) {
      height: 67px;
      background-position: center;
    }
 
  }

  @media (max-width: ${mediaQuery}) {
    justify-content: center;
    align-items: 'flex-start';
    height: 14rem;

  }

`
