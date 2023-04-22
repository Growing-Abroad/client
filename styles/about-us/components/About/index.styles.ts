import styled, { css } from "styled-components";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import { open } from "@styles/animations";
import { Montserrat } from "@next/font/google";

interface TextProps {
  isOpen: boolean;
}

const font = Montserrat({
  subsets: ["latin"],
});
export const Container = styled.section<TextProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 40px ${variables.sizes.globalHorizontalPadding} 0;
  color: ${theme.colors.blue700};
  font: 400 1rem;
  padding-bottom: 100px;
  border-bottom: 1px solid #05335b;
  @media (max-width: ${variables.sizes.mediaQuery}) {
    padding: 30px 40px 60px 40px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 243px;

  @media (min-width: ${variables.sizes.mediaQuery}) and (max-width: 1280px) {
    gap: 140px;
  }

  @media (min-width: ${variables.sizes.mediaQuery}) {
    flex-direction: row;
  }

  @media (max-width: 5580px) {
    flex-direction: initial;
  }
  @media (max-width: ${variables.sizes.mediaQuery}) {
    justify-content: space-between;
    gap: 25px;
    #box0 {
      h3,
      h4 {
        text-align: left;
      }
      align-items: end;
    }

    #box1 {
      h3,
      h4 {
        text-align: right;
      }
      align-items: end;
    }
  }
`;

export const Text = styled.div<TextProps>`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  .paragraph-container {
    margin-top: 0;
    overflow: hidden;
    height: 0;
    transition: all 1.5s;

    ${({ isOpen, theme }) =>
      isOpen &&
      css`
        height: 120vh;
        overflow: :visible;

        @media (max-width: 1125px) {
          height: 150vh;
        }

        @media (max-width: 1050px) {
          height: 175vh;
        }

        @media (max-width: ${theme.sizes.mediaQuery}) {
          height: 150vh;
        }

        @media (max-width: 535px) {
          height: 175vh;
        }

        @media (max-width: 470px) {
          height: 200vh;
        }

        @media (max-width: 430px) {
          height: 250vh;
        }
      `}
  }

  h3 {
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    margin: 0;
    white-space: nowrap;
  }

  h4 {
    text-align: center;
    font-family: ${font.style.fontFamily};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    max-width: 342px;
    width: 100%;
    margin: 0;
    padding: 0;
    /* padding-bottom: 20px; */
  }

  p {
    text-align: justify;
    font-weight: 400;
    margin-top: 0;
  }

  @media (max-width: ${variables.sizes.mediaQuery}) {
    /* max-width: 160px; */
    h3 {
      font-size: 24px;
      white-space: initial;
    }
    h4 {
      font-size: 14px;
    }
    p {
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
    color: ${theme.colors.blue400};
    font-weight: 700;
    border: 1px solid ${theme.colors.blue400};
    border-radius: 50%;
    transition: all 0.5s ease;
    display: none;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
