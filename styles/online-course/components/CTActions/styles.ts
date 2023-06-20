import styled from "styled-components";
import { variables } from "@styles/global-variables";
import { theme } from "@styles/theme";
import StdButton from "@/components/generics/StdButton/StdButton";

const {
  sizes: { mediaQuery },
} = variables;
const {
  colors: { blue500, blue700, yellow400 },
} = theme;

interface BackgroundCTAProps {
  isMobile: boolean;
}

interface SubTitleProps {
  isMobile: boolean
}


export const BackgroudCTA = styled.section<BackgroundCTAProps>`
  margin-top: ${({ isMobile }) => (isMobile ? "66px" : "90px")};
  width: 100%;
  height: 100%;
  max-height: ${({ isMobile }) =>
    isMobile ? "776px" : "710px"};
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: ${blue500};
  &.candidate {
    max-height: 97vh;
  }
`;

export const CtaButton = styled.button`
  padding: 18px 46px;
  font-size: 1rem;
  font-weight: 700;
  background-color: ${yellow400};
  color: ${blue700};
  transition: 300ms;
  height: 54px;
  letter-spacing: 1.3px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  gap: 10px;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${blue700};
    color: ${yellow400};
  }

  @media (max-width: ${mediaQuery}) {
    padding: 16px 40px;
    font-size: 1.125rem;
  }
`;

export const BannerMainContainer = styled.section`
  max-width: ${variables.sizes.maxWidthAll};
  width: 100%;
  height: 90%;
  padding: 1.5rem 1.125rem 0;
  background-color: ${blue500};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.0625rem;
  &.candidates {
    height: 100%;
    justify-content: space-between;
    padding-bottom: 30px;
    @media screen and (min-width: 1024px) {
      padding-bottom: 70px;
    }
  }

  .left-side {
    display: flex;
    flex-direction: column;
    gap: 1.4425rem;
    width: 100%;

    button {
      max-width: 17.4375rem;
    }

    h1 {
      max-width: 17.4375rem;
      color: #fff;
      font-size: 2.75rem;
      font-weight: 600;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: 0;

      .title-change {
        font-weight: 600;
        animation-iteration-count: 1;
        position: relative;
        left: -200px;
        opacity: 0;
        animation-fill-mode: both;
        display: inline-block;
        color: ${blue500};
        animation: text-enter-germany 3000ms ease;

        @keyframes text-enter-germany {
          0% {
            left: -200px;
            color: ${blue500};
            visibility: hidden;
            opacity: 0;
          }
          20% {
            left: 0;
            visibility: visible;
            color: ${blue700};
          }
          40% {
            color: ${yellow400};
            opacity: 1;
          }
          80% {
            left: 0;
            visibility: visible;
            color: ${yellow400};
            opacity: 1;
          }
          100% {
            left: 200px;
            visibility: hidden;
            opacity: 0;
            color: ${blue500};
          }
        }
      }
    }
  }

  .right-side {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      max-width: 375px;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (min-width: 430px) {
    .left-side {
      align-items: center;
    }
  }

  @media screen and (min-width: ${mediaQuery}) {
    padding-top: 5.3125rem;

    .left-side {
      align-items: center;

      button {
        max-width: 70%;
        width: 100%;
      }

      h1 {
        max-width: 71%;
        font-size: 3.75rem;
      }
    }

    .right-side {
      margin-top: auto;
      img {
        max-width: 314px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin: 0 auto;
    padding-top: 5.3125rem;
    padding-left: 7rem;
    align-items: start;

    .left-side {
      align-items: start;
      button {
        width: 100%;
        max-width: 21.9375rem;
      }

      h1 {
        font-size: 4.625rem;
        max-width: 100%;
      }
    }

    .right-side {
      img {
        max-width: 657px;
      }
    }
  }
`;

export const SubTitle = styled.span<SubTitleProps>`
  color: #fff;
  font-size: ${({ isMobile }) => isMobile ? '20px' : '24px'}; 
  font-weight: 400;
  line-height:  ${({ isMobile }) => isMobile ? '30px' : '38px'}; ;
  max-width: ${({ isMobile }) => isMobile ? '323px' : '30rem'};  
`;


export const StdButtonCustom = styled(StdButton)`
  margin: 0;
  @media screen and (min-width: 1024px) {
    margin-top: 25px;
  }
`

export const StdVideoCustom = styled(StdButtonCustom)`
  margin: 20px 0 81px;
`