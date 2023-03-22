import styled, { StyledProps } from 'styled-components';

interface TitleProps {
  GeneralColor: StyledProps<any>;
  FirstColor: StyledProps<any>;
  SecondColor: StyledProps<any>;
}

interface ImageBackgroundProps {
  background: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundBlue};
  padding: 40px ${({ theme }) => theme.sizes.globalHorizontalPadding} 0
    ${({ theme }) => theme.sizes.globalHorizontalPadding};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImageBackground = styled.div<ImageBackgroundProps>`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: 100% 110%;
  background-size: 728px 520px;
  width: 1250px;
  height: 100%;
  /* padding-bottom: 170px; */
`;

export const TextsContainer = styled.div`
  max-width: 752px;
  padding-bottom: 170px;
  z-index: 999;
  /* background-color: red; */
`;

export const Title: TitleProps = {
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
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,
  FirstColor: styled.span`
    color: ${({ theme }) => theme.colors.primaryYellow};
  `,
  SecondColor: styled.span`
    color: ${({ theme }) => theme.colors.primaryBlue};
  `,
};

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
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
`;
