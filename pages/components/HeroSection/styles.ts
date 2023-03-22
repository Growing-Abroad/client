import styled, { StyledProps } from 'styled-components';

interface TitleProps {
  Container: StyledProps<any>;
  GeneralColor: StyledProps<any>;
  FirstColor: StyledProps<any>;
  SecondColor: StyledProps<any>;
}

export const Container = styled.div`
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundBlue};
  padding-right: ${({ theme }) => theme.sizes.globalHorizontalPadding};
  padding-left: ${({ theme }) => theme.sizes.globalHorizontalPadding};
`;

export const Content = styled.div``;

export const Title: TitleProps = {
  Container: styled.div`
    display: flex;
    max-width: 752px;
  `,
  GeneralColor: styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 62px;
    line-height: 80px;
    color: ${({ theme }) => theme.colors.white};
  `,
  FirstColor: styled.span`
    color: ${({ theme }) => theme.colors.primaryYellow};
  `,
  SecondColor: styled.span`
    color: ${({ theme }) => theme.colors.primaryBlue};
  `,
};

export const Subtitle = styled.h2`
  font-size: 62px;
  color: ${({ theme }) => theme.colors.white};
`;
