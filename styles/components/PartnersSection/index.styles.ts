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
