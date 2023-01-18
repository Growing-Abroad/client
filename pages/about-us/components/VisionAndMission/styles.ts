import styled  from "styled-components";
import { variables } from "../../../../src/styles/global-variables";
import { theme } from "../../../../src/styles/theme";

interface IContainer {
  backgroundImg: string;
}

export const Container = styled.section<IContainer>`
  width: min(100%, ${variables.sizes.maxWidthAll});
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 80px ${variables.sizes.globalHorizontalPaddingMobile};

  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-color: white;
  background-repeat: no-repeat;
  background-position: left center ;

  @media(min-width: ${variables.sizes.mediaQuery}) {
    flex-direction: row;
    padding-inline: ${variables.sizes.globalHorizontalPadding};
  }
`

export const TextContainer = styled.div<{ background?: string, color?:string}>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  color: ${({ color }) => color === 'primary' ? 'white' : theme.colors.primaryBlue};
  font: 700 3rem 'Montserrat', sans-serif;
  padding: 2rem;
  border-radius: 0.5rem;

  > h3 {
    text-align: center;
    letter-spacing: 2px;
  }

  > p {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  @media (min-width: ${variables.sizes.mediaQuery}) {
    width: 50%;
    > h3 {
      text-align: left;
    }
  }
`

// export const LeftContent = styled.div`
//   display: flex;
//   align-items: flex-end;
//   justify-content: flex-end;
//   height: 400px;
//   background-image: url(${BackgroundImage.src});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: 100% 100%;

//   padding: 1rem;

//   @media (min-width: ${variables.sizes.mediaQuery}) {
//     padding-right: 0;
//   }
// `
