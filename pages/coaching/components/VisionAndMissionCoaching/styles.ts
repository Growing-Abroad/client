import styled  from "styled-components";
import { variables } from "../../../../src/styles/global-variables";
import { theme } from "../../../../src/styles/theme";

interface IContainer {
  backgroundImg: string;
}

const {sizes: {globalHorizontalPadding, globalHorizontalPaddingMobile, mediaQuery}} = variables;

export const Container = styled.section<IContainer>`
  width: min(100%, ${variables.sizes.maxWidthAll});
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 80px ${globalHorizontalPadding};

  position: relative;

  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-color: white;
  background-repeat: no-repeat;
  background-position: left center ;

  @media(min-width: ${mediaQuery}) {
    flex-direction: row;
    margin-inline: ${globalHorizontalPaddingMobile};
  }
`

export const TextContainer = styled.div<{ color?:string, left: string, top: string}>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  color: ${({ color }) => color === 'primary' ? 'white' : theme.colors.primaryBlue};
  font: 700 3rem;
  padding: 2rem;
  border-radius: 0.5rem;
  position: absolute;
  left: ${({left})=> left};
  top: ${({top})=> top};
  text-align: justify;

  > h3 {
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 66px;
    font-weight: 600;
  }

  > p {
    max-width: 411px;
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  @media (min-width: ${variables.sizes.mediaQuery}) {
    width: 50%;
    > h3 {
      text-align: left;
    }
  }
`
