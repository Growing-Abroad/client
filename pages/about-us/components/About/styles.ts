import styled from "styled-components";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import { open } from "@styles/animations";
import { Montserrat } from "@next/font/google";

const font = Montserrat({
  subsets: ['latin']
})
export const Container = styled.section`
  width: 100;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 80px ${variables.sizes.globalHorizontalPadding} 0;
  color: ${theme.colors.primaryBlue};
  font: 400 1rem;
  padding-bottom:100px;
  background-color: #e3effe;

  .read-more-btn {
    margin: auto;
    min-width: 200px;
    border-radius: 50px;
    padding: 20px 40px;
    background: #FFDB5C;
    border: #FFDB5C;
    box-shadow: 0px 15px 30px 0px #00000040;
    color: #05335B;
    font-family: ${font};
    font-weight: 600;
    font-size: 20px;
    line-height: 19px;
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding-inline: ${variables.sizes.globalHorizontalPaddingMobile};
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: ${variables.sizes.mediaQuery}) {
    flex-direction: row;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  width: 100%;

  h3 {
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  h4{
    text-align: center;
  }

  p {
    animation: ${open} 0.5s linear;
    transition: all 0.5s ease;
  }
`;

export const More = styled.div`
  margin: 0 auto;
  font-size: 1.5rem;
  display: none;

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem;
    color: ${theme.colors.secondaryBlue};
    font-weight: 700;
    border: 1px solid ${theme.colors.secondaryBlue};
    border-radius: 50%;
    transition: all 0.5s ease;
    display:none;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
