import styled from "styled-components";
import { theme } from "@styles/theme";
import { variables } from "@/styles/global-variables";
const {
  colors: { blue400, blue700, white },
} = theme;
const {
  sizes: { mediaQuery },
} = variables;

export const ContainerBlogCard = styled.div`
  display: flex;
  width: 594px;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  height: 246px;
  @media (max-width: ${mediaQuery}) {
    height: 124px;
    width: 346px;
    gap: 12px;
  }
`;
export const ContentBlogCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 306px;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
  @media (max-width: ${mediaQuery}) {
    height: 100%;
    gap: 0.75rem;
    h3 {
      font-size: 1rem;
      line-height: 20px;
      letter-spacing: 1px;
    }
    p {
      font-size: 0.75rem;
      line-height: 15px;
    }
  }
  button {
    font-size: 10px;
  }
`;
export const TitleBlogCard = styled.h3`
  color: ${blue700};
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 1.3px;
  margin: 0;
`;
export const TextBlogCard = styled.p`
  color: ${blue700};
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  max-width: 306px;
  max-height: 141px;
  margin: 0;
`;
export const ButtonReadMore = styled.button`
  color: ${blue400};
  display: flex;
  align-items: center;
  gap: 2px;
  letter-spacing: 1.3px;
  justify-content: flex-end;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: ${white};
  border: none;
  @media (max-width: ${mediaQuery}) {
    margin-bottom: 5%;
  }
`;
