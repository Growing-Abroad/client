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
  height: 250px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content:"flex-start";
  position: relative;

  @media (max-width: ${mediaQuery}) {
      background-position: -155px;
      justify-content: flex-start;
      height: 650px;

    }


`
