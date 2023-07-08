import styled, { css } from "styled-components";
import { theme } from "@styles/theme";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 255px;
  height: 758px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 8px 15px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  text-align: center;
  color: ${theme.colors.blue700};
  overflow: hidden;
  transition: all 450ms;
  min-height: 660px;
  max-height: 697px;

  &:hover {
    transform: scale(1.05);
    outline: 3px solid ${theme.colors.blue700};
  }

  .card-image {
    width: 100%;
    height: 295px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 199.05px;
  }
`;

export const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
  /* gap: 1.5rem; */
  padding: 1.5rem 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 1.5rem;
  h2 {
    font-weight: 600;
  }
  h3 {
    font-size: 1rem;
    font-weight: 600;
  }
`;
export const CardDescriptions = styled.div`
  font-family: "Montserrat";
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  font-weight: 400;
  letter-spacing: 4%;
  flex-grow: 1;
  margin-top: 32px;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      margin: 0;
      padding: 0;

      span {
        font-weight: 500;
      }
    }
  }

  .star {
    flex-shrink: 0;
    color: yellow;
    width: 1.25rem;
    height: 1.25rem;
    color: ${theme.colors.yellow400};
  }
`;

export const PostText = styled.p`
  text-transform: capitalize;
  color: ${theme.colors.blue700};
`;

export const Button = styled.button`
  white-space: nowrap;
  width: 196px;
  height: 59px;
  background: ${theme.colors.yellow400};
  color: ${({ theme }) => theme.colors.blue700};
  font-weight: 700;
  font-size: 1rem;
  padding: 20px 40px;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.mediaQuery}) {
      width: 105px;
      height: 35px;
      padding: 8px 15px;
      font-size: 0.813rem;
    }
  `}
`;
