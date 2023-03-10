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

export const Container = styled.section<IContainerProps>`
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


  .border-image{
    width: 100%;
    left: 0;
    bottom: 0;
    position: absolute;
  }

  @media (max-width: ${mediaQuery}) {
    justify-content: center;
    align-items: 'flex-start';
    height: 14rem;

  }

`
