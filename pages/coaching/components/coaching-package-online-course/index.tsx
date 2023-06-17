import TwoColorTitle from "@/components/two-color-title";
import { variables } from "@/styles/global-variables";
import Image from "next/image";
import styled from "styled-components";
import CoachingPackage from "@assets/pages/coaching/coaching-package.jpg";
import useAppContext from "@/hooks/useAppContext";
import LeftRetangle from "@assets/pages/coaching/left-blue-400.jpg";
import StdButton from "@/components/generics/StdButton/StdButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const {
  sizes: { globalHorizontalPadding, maxWidthAll, mediaQuery },
} = variables;
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { theme } from "@/styles/theme";

const {
  colors: { yellow400, blue700 },
} = theme;

const PackageCourseWrapper = styled.section`
  max-width: ${maxWidthAll};
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 130px;
  margin-bottom: 130px;

  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    gap: 120px;
    padding: 0 16px;
    margin-bottom: 80px;

  }
`;

const PackageCourseContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &.reversed {
    align-items: flex-start;

    .card-image {
      padding-right: 0px;
      padding-left: 150px;
    }
    .blue-retangle {
      right: unset;
      left: 0;
    }
    .price-wrapper {
      right: unset;
      left: 23px;
    }
  }

  .package-course-details {
    color: ${blue700};
    padding: 38px 32px 54px;


    p {
      margin: 0;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.blue700};
      span {
        color: ${({ theme }) => theme.colors.blue400};
      }
    }
    ul {
      margin: 32px 0 42px;
      padding-left: 0;
      display: flex;
      flex-direction: column;
      gap: 24px;

      li {
        display: flex;
        align-items: center;
        gap: 26px;

        font-size: 1rem;
        line-height: 1.25rem;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        .check-icon {
          font-weight: 900;
          font-size: 28px;
        }
      }
    }
    .book-now-btn {
      margin-inline: auto;
      display: flex;
      margin-bottom: 50px;
    }
  }

  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    align-items: center;

    &.reversed {
      align-items: center;
      .card-image {
        padding-right: 0px;
        padding-left: 100px;
      }
      .price-wrapper {
        right: unset;
        left: 30px;
      }
    }

    .package-course-details {
      padding: 42px 24px;

      p {
        font-size: 16px;
        line-height: 20px;
      }

      ul {
        gap: 20px;
        margin: 32px 0 32px 0;

        li {
          font-size: 12px;
          line-height: 16px;
          gap: 14px;
        }
      }

      .book-now-btn {
        margin-bottom: 20px;
        padding: 8px 15px;
      }
    }
  }

  @media (max-width: 450px) {
    .package-course-details {

      ul {
        /* gap: 20px;
        margin: 16px 0; */
      }
    }
  }

  @media (max-width: 415px) {
    .package-course-details {

      ul {
        gap: 10px;
        /* margin: 5px 0; */
      }
    }
  }

`;

const Card = styled.div`
  max-width: 652px;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.15);
  border-radius: 10px;
  margin-top: 70px;

  @media (max-width: ${mediaQuery}){
    margin-top: 16px;

  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  border-radius: 10px;
  overflow: hidden;

  .card-image {
    padding-right: 150px;
  }

  .blue-retangle {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0%;
    z-index: 1;
    height: 100%;
    width: 250px;
  }

  .price-wrapper {
    position: absolute;
    z-index: 2;
    right: 23px;
    top: 25%;
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .price {
      color: white;
      font-weight: 600;
      letter-spacing: 1.3px;

      &.old-price {
        font-size: 2rem;
        line-height: 2.438rem;
        text-decoration: line-through;
      }

      &.new-price {
        font-size: 3rem;
        line-height: 3.688rem;
      }
      &.yellow {
        color: ${yellow400};
      }
      &.heading {
        font-size: 2rem;
        color: ${yellow400};
      }
    }
  }

  @media (max-width: ${mediaQuery}) {
    height: 221px;

    .card-image {
      padding-right: 100px;
    }

    .blue-retangle {
      width: 170px;
    }

    .price-wrapper {
      top: 30%;
      gap: 18px;
      right: 30px;

      .price {
        &.old-price {
          font-size: 1.25rem;
          line-height: 1.5rem;
        }

        &.new-price {
          font-size: 2rem;
          line-height: 2.25rem;
        }

        &.heading {
          font-size: 1.5rem;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function CoachingPackageOnlineCourseSection() {
  const {
    isMobile,
    windowSize: { width },
  } = useAppContext();
  const twoColorFontSize = isMobile ? "2rem" : "3.25rem";

  const detailsContent = [
    "CV, Cover Letter and LinkedIn Optimization for the German and European Job market",
    "Individual Job Search Strategy with the focus on your strengths and goals",
    "Individual Job Interview Coaching, Mock up Interview and Video Analysis to get every job you wish for",
  ];

  return (
    <PackageCourseWrapper>
      <PackageCourseContent>
        <TwoColorTitle
          as="h2"
          text1="Coaching"
          text2="Package"
          hasSpaceBtw
          fontSize={twoColorFontSize}
        />

        <Card>
          <ImageWrapper>
            <Image
              src={CoachingPackage}
              alt="coaching package"
              style={{ width: "100%", height: "100%" }}
              className="card-image"
            />
            <Image
              src={LeftRetangle}
              alt="blue retangle to frame the price"
              className="blue-retangle"
            />
            <div className="price-wrapper">
              <span className="price old-price">1360 €</span>
              <span className="price new-price">597 €</span>
            </div>
          </ImageWrapper>

          <div className="package-course-details">
            <p>
              Get our special Coaching package with all the Coaching Sessions
              from above and <span>save more than 750 €</span>
            </p>
            <ul>
              {detailsContent.map((liText, i) => (
                <li key={i}>
                  <FontAwesomeIcon
                    className="check-icon"
                    icon={faCheck}
                    color={yellow400}
                    size={isMobile ? "xl" : "sm"}
                  />
                  {liText}
                </li>
              ))}
            </ul>
            <ButtonContainer>
              <StdButton>Book Now</StdButton>
            </ButtonContainer>
          </div>
        </Card>
      </PackageCourseContent>
    </PackageCourseWrapper>
  );
}
