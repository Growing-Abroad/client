import styled, { css } from "styled-components";
import { SucessStoriesWrapper } from "styles/candidates/components/Success-stories/index.styles";

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
            padding: 80px 140px 50px;
            .short {
              height: 90%;
            }
          }
          @media screen and (max-width: 1280px) {
            max-width: 1098px;
          }
          
        `
      : css``
  }

`