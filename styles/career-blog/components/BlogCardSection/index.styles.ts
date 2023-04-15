import styled from "styled-components";

import { theme } from "@styles/theme";
import { variables } from "@/styles/global-variables";
const {
  colors: { blue400, blue700, white },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;
export const ContentBlogCardSection = styled.div`
  min-width: 1280px;
  background-color: ${white};
  flex-wrap: wrap;
  padding: 0px 140px;
  padding-top: 95px;
  padding-bottom: 128px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: flex-start;
  row-gap: 45px;
  column-gap: 40px;
  align-items: center;
  @media (max-width: ${mediaQuery}) {
    min-width: 430px;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    align-items: center;
    padding: 22px 42px 81px 42px;
    gap: 33px;
  }
`;
