import styled, { css } from "styled-components";

interface ContentProps {
  isMobile: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-bottom: 165px;
  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 0 30px;
    }
  `}
`;

export const TitleContainer = styled.div`
  padding: 0;


`;

export const ImageContainerA = styled.div`
  display: grid;
  grid-area: "AreaA";
  &:nth-child(2) {
    img {
      margin-top: 14px;
    }
  }

  &:nth-child(3),
  &:nth-child(4) {
    img {
      margin-top: 46px;
    }
  }
  img {
    height: auto;
  }
`;

export const ImageContainerB = styled.div`
  display: grid;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;  
  margin-top: 60px;
  grid-gap: 24.5px 110px;
  justify-content: center;
  align-items: center;

`;
