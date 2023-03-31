import styled, { css, StyledProps } from 'styled-components';

interface TitleProps {
  Container: StyledProps<any>;
  GeneralColor: StyledProps<any>;
  FirstColor: StyledProps<any>;
  SecondColor: StyledProps<any>;
}

interface ImageBackgroundProps {
  background: string;
}

interface ButtonContainerProps {
  haveAnotherButtonBelow: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundBlue};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px ${({ theme }) => theme.sizes.globalHorizontalPadding} 0
    ${({ theme }) => theme.sizes.globalHorizontalPadding};
`;

export const ImageBackground = styled.div<ImageBackgroundProps>`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: 100% 110%;
  background-size: 728px 520px;
  width: 100%;
  max-width: 1513px;
  height: 100%;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 40px 0 305px 0;
      background-size: 380px 271px;
      background-position: 50% 101%;
      flex-direction: column;
    }
  `}
`;

export const TextsContainer = styled.div`
  max-width: 752px;
  padding-bottom: 170px;
  /* z-index: 999; */

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding-bottom: 0;
    }
  `}
`;

export const Title: TitleProps = {
  Container: styled.div`
    width: 100%;
    padding: 0 30px 0 30px;

    ${({ theme }) => css`
      @media (max-width: ${theme.sizes.mediaQuery}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}
  `,
  GeneralColor: styled.h1`
    display: inline-block;
    text-align: left;
    max-width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 62px;
    line-height: 80px;
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => css`
      @media (max-width: ${theme.sizes.mediaQuery}) {
        /* max-width: 150%; */
        display: flex;
        flex-direction: row;
        font-size: 44px;
        line-height: 53.64px;
        align-items: center;
        text-align: center;
      }
    `}
  `,
  FirstColor: styled.span`
    color: ${({ theme }) => theme.colors.primaryYellow};
    flex-direction: row;
  `,
  SecondColor: styled.span`
    color: ${({ theme }) => theme.colors.primaryBlue};
  `,
};

export const SubtitleContainer = styled.div`
  width: 100vw;
  padding: 0 30px 0 30px;

  display: flex;
  flex-direction: column;
  font-size: 44px;
  line-height: 53.64px;
  align-items: center;
  text-align: center;

  margin-top: 13.56px;
  margin-bottom: 27.73px;
`;

export const Subtitle = styled.h2`
  /* Subheading */

  width: 580px;
  height: 114px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  /* or 158% */

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      justify-content: center;
      font-size: 16px;
      text-align: center;
      padding: 0 10px;
      line-height: 0px;
      letter-spacing: 1.3px;
      height: 16px;
    }
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  `}
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100vw;
  height: 75.5%;
`;
