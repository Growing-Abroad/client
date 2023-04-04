import styled from "styled-components";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import { open } from "@styles/animations";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ['latin']
})
export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 40px ${variables.sizes.globalHorizontalPadding} 0;
  color: ${theme.colors.primaryBlue};
  font: 400 1rem;
  padding-bottom:100px;
  border-bottom: 1px solid #05335B;

  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding:30px 40px 60px 40px;

  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 293px;

  @media (min-width: ${variables.sizes.mediaQuery}) {
    flex-direction: row;
  }

  @media (max-width:5580px) {
    flex-direction: initial;
  }
  @media (max-width: 580px) {
    justify-content:space-between;
    gap:50px;
    #box0 {
      h3,h4{
        text-align:left;
      }
      align-items: start;
    }

    #box1{
      h3,h4{
        text-align:right;
      }
      align-items: end;
    }

    }
`;

export const Text = styled.div`
width:400px;
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:20px;

  h3 {
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    margin:0;
    white-space:nowrap;
  }

  h4{
    text-align: center;
    font-family: ${font.style.fontFamily};
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    max-width: 342px;
    width:100%;
    padding-bottom: 20px;

  }

  p {
    animation: ${open} 0.5s linear;
    transition: all 0.5s ease;
  }

  @media (max-width: 580px) {

    max-width:160px;
    h3 {
      font-size: 24px;
      white-space: initial;
    }
    h4 {
      font-size: 14px;
    }
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
