import styled, { css } from "styled-components";

interface ContentProps {
  isMobile: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 168px 140px;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 0 30px;
    }
  `}
`;

export const TitleContainer = styled.div`
  padding: 0;

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      padding: 0 60px;
    }
  `}
`;

export const ImageContainerA = styled.div`
  display: grid;
  grid-area: "AreaA";
`;

export const ImageContainerB = styled.div`
  display: grid;
  grid-area: "AreaB";
`;

export const Content = styled.div<ContentProps>`
  display: grid;
  width: 100%;
  /* max-width: 100%; */
  margin-top: 60px;
  grid-gap: 24.5px 110px;
  justify-content: center;
  align-items: center;

  ${({ isMobile }) =>
    isMobile
      ? css`
          grid-template-areas:
            "AreaA AreaA"
            "AreaA AreaA"
            "AreaA AreaA"
            "AreaB AreaB"
            "AreaB AreaB"
            "AreaB AreaB";
          /* grid-gap: 5px; */
        `
      : css`
          grid-template-areas:
            "AreaA AreaA AreaA AreaA AreaA"
            "AreaB AreaB AreaB AreaB AreaB";
        `}
`;
