import { useState } from "react";
import styled from 'styled-components';

import TwoColorTitle from "@components/two-color-title";
import useAppContext from "@/hooks/useAppContext";
import uan from "@/../public/assets/pages/sales/uan.png";
import manu from "@/../public/assets/pages/sales/manu.jpg";
import {
  DiscoverReadMoreWrapper,
  DiscoverGrowingAbroadSection,
} from "@styles/pages-styles/candidates/DiscoverGA/index.styles";
import { DiscoverContent } from "@/components/BlueSquareWithCaroulsel/style";




export const CareerExpertsContainer = styled.div`
  width: 60%;
  height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ActiveImage = styled.img`
  width: 380px;
  height: 485px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 396px;
    height: 380px;
  }
`;

export const SmallImage = styled.img`
  cursor: pointer;
  width: 187px;
  height: 405px;
  object-fit: cover;
  object-position: 55% 10%;
  opacity: 0.5;
`;

export const BoxDiscover = styled.div`
  width: 100%;
  height: 100%;
`


interface CareerExpertsProps {
  activeImage: string;
  smallImage: string;
}


export default function CareerExperts({ activeImage, smallImage }: CareerExpertsProps) {
  const { isMobile } = useAppContext();
  const [activeImageId, setActiveImageId] = useState<"uan" | "manu">("uan");

  const handleImageClick = (id: "uan" | "manu") => {
    setActiveImageId(id);
  };

  return (
    <DiscoverGrowingAbroadSection
      style={{
        paddingTop: `${isMobile ? "96px" : "146px"}`,
        paddingBottom: `${isMobile ? "0px" : "20px"}`,
      }}
    >
      <TwoColorTitle
        text1={"“Uan & Manu"}
        text2="your Career Experts"
        hasSpaceBtw
        as="h2"
        wrapperClassName="discover-wrapper"
        className="discover-title"
        styles={{
          width: `${isMobile ? "340px" : ""}`,
          display: "flex",
          flexDirection: "column",
          fontSize: `${isMobile ? "32px" : "58px"}`,
          gap: "0",
        }}
      />

      {isMobile ? (
        <>
          <DiscoverContent
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "26px 22px 0 22px",
            }}
          >
            <ActiveImage src={uan.src} alt={smallImage}  className="uan-image"/>
            <DiscoverReadMoreWrapper>
              <BoxDiscover>
                <p
                  style={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "justify",
                  }}
                >
                  <span style={{ fontSize: "32px" }}>UAN</span> is the perfect
                  example of a successful foreigner who was able to build an
                  outstanding life and career in Germany. Growing up in a small
                  village in Brazil, not coming from a rich family, life and job
                  perspective were very limited. More than 10 years later he
                  turned his life around graduated from a top university in
                  Germany, having his German passport and having a management
                  position.
                  <br />
                  <br />
                  Uan has done multiple interviews in his life, managed and
                  recruited many people by himself and knows exactly what is
                  needed and expected in order to fulfill the European standard.
                  <br />
                  <br />
                  In this Online Course he will show you all the steps he took
                  to have a successful career in Europe.{" "}
                </p>
              </BoxDiscover>
            </DiscoverReadMoreWrapper>
          </DiscoverContent>
          <DiscoverContent
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "26px 22px 0 22px",
            }}
          >
            <ActiveImage
              src={manu.src}
              alt={smallImage}
              style={{ objectPosition: "120%" }}
              className="manu-image"
            />
            <DiscoverReadMoreWrapper style={{ margin: "26px 22px 0 22px" }}>
              <BoxDiscover>
                <p
                  style={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "justify",
                  }}
                >
                  <span style={{ fontSize: "32px" }}>MANU</span> brings the
                  German perspective and mentality. As a professional Coach,
                  Trainer and Actor, he knows exactly how to present yourself
                  from your best side.
                  <br />
                  <br />
                  He has been coaching and training executives of international
                  companies how to present themselves in a charismatic way and
                  how to gain confidence and personal development. Besides that
                  he is a professor for various Universities in Germany training
                  students how to prepare and present themselves for job
                  interviews and how to impact at the first impression.
                  <br />
                  <br />
                  With his knowledge and expertise he will guide you through the
                  job application process and teach you the best techniques and
                  tricks you can have in the German market.
                </p>
              </BoxDiscover>
            </DiscoverReadMoreWrapper>
          </DiscoverContent>{" "}
        </>
      ) : (
        <DiscoverContent>
          <DiscoverReadMoreWrapper>
            <BoxDiscover className="discover-text">
              {activeImageId === "uan" ? (
                <p>
                  <span style={{ fontSize: "32px" }}>UAN</span> is the perfect
                  example of a successful foreigner who was able to build an
                  outstanding life and career in Germany. Growing up in a small
                  village in Brazil, not coming from a rich family, life and job
                  perspective were very limited. More than 10 years later he
                  turned his life around graduated from a top university in
                  Germany, having his German passport and having a management
                  position.
                  <br />
                  <br />
                  Uan has done multiple interviews in his life, managed and
                  recruited many people by himself and knows exactly what is
                  needed and expected in order to fulfill the European standard.
                  <br />
                  <br />
                  In this Online Course he will show you all the steps he took
                  to have a successful career in Europe.{" "}
                </p>
              ) : (
                <p>
                  <span style={{ fontSize: "32px" }}>MANU</span> brings the
                  German perspective and mentality. As a professional Coach,
                  Trainer and Actor, he knows exactly how to present yourself
                  from your best side.
                  <br />
                  <br />
                  He has been coaching and training executives of international
                  companies how to present themselves in a charismatic way and
                  how to gain confidence and personal development. Besides that
                  he is a professor for various Universities in Germany training
                  students how to prepare and present themselves for job
                  interviews and how to impact at the first impression.
                  <br />
                  <br />
                  With his knowledge and expertise he will guide you through the
                  job application process and teach you the best techniques and
                  tricks you can have in the German market.
                </p>
              )}
            </BoxDiscover>
          </DiscoverReadMoreWrapper>
          <CareerExpertsContainer>
            <ActiveImage
              src={activeImageId === "manu" ? smallImage : activeImage}
              alt={smallImage}
              onClick={() =>
                handleImageClick(activeImageId === "uan" ? "manu" : "uan")
              }
            />
            <SmallImage
              src={activeImageId === "uan" ? smallImage : activeImage}
              alt={smallImage}
              onClick={() =>
                handleImageClick(activeImageId === "uan" ? "manu" : "uan")
              }
            />
          </CareerExpertsContainer>
        </DiscoverContent>
      )}
    </DiscoverGrowingAbroadSection>
  );
}
