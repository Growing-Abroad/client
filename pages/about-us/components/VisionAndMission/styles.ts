import styled  from "styled-components";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import BackgroundImage from "@assets/aboutus/online-course-success.webp";

export const Container = styled.section`
  width: min(100%, ${variables.sizes.maxWidthAll}); 
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid darkgray;
  border-bottom: 1px solid darkgray;
  gap: 2rem;
  margin: 2rem 0;
`

export const LeftContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 2rem;
  height: 400px;
  background-image: url(${BackgroundImage.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

interface ITextContainer {
  color?: string
  maxWidth?: string
  background?: string 
}

export const TextContainer = styled.div<ITextContainer>`
  color: ${({ color }) => color === "white"? color : theme.colors.primaryBlue };
  font: 700 1rem "Montserrat", sans-serif;
  position: relative;
  background: ${({ background }) => background === 'blue' ? 'rgba(74,154,253,0.6)' : 'transparent'};
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;

  > h3 {
    font-size: 3rem;
    z-index: 10;
  }

  > p {
    letter-spacing: 1px;
    font-weight: 400;
    z-index: 10;
  }
`