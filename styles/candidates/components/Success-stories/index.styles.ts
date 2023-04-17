import styled from "styled-components";
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
  padding: 80px 40px;
  align-items: center;
  max-width: ${maxWidthAll};
  width: 100%;

  @media (max-width: ${mediaQuery}) {
    padding: 80px ${globalHorizontalPaddingMobile};
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
