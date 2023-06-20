import styled, { css } from "styled-components";
import { theme } from "@styles/theme";
import { variables } from "@styles/global-variables";

const {
  colors: { blue700 },
} = theme;
const {
  sizes: {
    mediaQuery,
    globalHorizontalPadding,
    maxWidthAll,
    globalHorizontalPaddingMobile,
  },
} = variables;

export const SucessStoriesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px ${globalHorizontalPadding} 80px;
  align-items: center;
  max-width: ${maxWidthAll};
  width: 100%;

  @media (max-width: ${mediaQuery}) {
    padding: 40px ${globalHorizontalPaddingMobile};
  }
`;

export const SuccessSubtitle = styled.p`
  color: ${blue700};
  max-width: 604px;
  font-size: 1.5rem;
  line-height: 38px;
  font-weight: 400;
  text-align: center;
  margin-top: 9px;
  margin-bottom: 30px;

  @media (min-width: 200px) and (max-width: 1280px) {
    font-size: calc(0.875rem + ((1vw - 2px) * 0.5556));
    line-height: calc(1rem + ((1vw - 2px) * 0.7407));
    min-height: 0;
  }
`;




interface SucessStoriesWrapperCustomProps {
    hasSubTitle: boolean;
}

export const SucessStoriesWrapperCustom = styled(SucessStoriesWrapper)<SucessStoriesWrapperCustomProps>`
  ${({ hasSubTitle }) =>
    !hasSubTitle
      ? css`
          gap: 30px;
          margin-top: 45px;
          padding: 0 25px 40px;
          @media screen and (min-width: 1024px) {   
            margin-top: 48px;
            transform: scale(1.109);
            gap: 50px;
            padding: 80px 140px 80px;
            .short {
              height: 90%;
            }
          }
          @media screen and (max-width: 1280px) {
            max-width: 1098px;
          }
          
        `
      : css`
         @media screen and (min-width: 1024px) {   
            .short {
              height: 90%;
            }
          }
      `
  }

`;