import { useState } from "react";
import styled from "styled-components";
import TwoColorTitle from "@components/two-color-title";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import useAppContext from "@/hooks/useAppContext";
import type { StaticImageData } from "next/image";
import uan from "@/../public/assets/pages/sales/uan.png";
import manu from "@/../public/assets/pages/sales/manu.webp";
import {
  DiscoverContent,
  DiscoverReadMoreWrapper,
  DiscoverWrapper,
} from "styles/candidates/components/DiscoverGA/index.styles";

const Container = styled.div`
  width: 587px;
  height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

`;

const ActiveImage = styled.img`
  width: 380px;
  height: 485px;
  object-fit: cover;
  @media(max-width: 768px) {
    width:396px;
    height: 328px;
  }
`;

const SmallImage = styled.img`
  cursor: pointer;
  width: 187px;
  height: 405px;
  object-fit: cover;
  object-position: 55% 10%;
`;

interface Props {
  activeImage: string;
  smallImage: string;
}

export default function CareerExperts({ activeImage, smallImage }: Props) {
  const { isMobile } = useAppContext();
  const [activeImageId, setActiveImageId] = useState<"uan" | "manu">("uan");

  const handleImageClick = (id: "uan" | "manu") => {
    setActiveImageId(id);
  };

  return (
    <DiscoverWrapper style={{ paddingTop: `${isMobile ?"96px" :"146px"}`, paddingBottom:`${isMobile ?"0px" :"146px"}`}}>
      <TwoColorTitle
        text1={isMobile ?"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Uan & Manu" : "We are Uan & Manu"}
        text2="your Career Experts"
        hasSpaceBtw
        as="h2"
        wrapperClassName="discover-wrapper"
        className="discover-title"
        styles={{ width:`${isMobile ?"340px" :""}`, display: "flex", flexDirection: "column", gap: "0" }}
      />

      {isMobile ? (
        <>
          <DiscoverContent style={{display:'flex', flexDirection:'column', margin:'26px 22px 48px 22px'}}>
          <ActiveImage
                src={uan.src}
                alt={smallImage}
              />
            <DiscoverReadMoreWrapper>

              <StdParagraqh>
                <p style={{color:'white', fontSize:'14px', fontWeight:'600', textAlign:'justify'}}>
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
              </StdParagraqh>
            </DiscoverReadMoreWrapper>
          </DiscoverContent>
          <DiscoverContent style={{display:'flex', flexDirection:'column', margin:'26px 22px 48px 22px'}}>
            <ActiveImage
              src={manu.src}
              alt={smallImage}
              style={{objectPosition:'150%'}}
              className="manu-image"
            />
            <DiscoverReadMoreWrapper style={{margin:'26px 22px 48px 22px'}} >
              <StdParagraqh>
                <p style={{color:'white', fontSize:'14px', fontWeight:'600', textAlign:'justify'}}>
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
              </StdParagraqh>
            </DiscoverReadMoreWrapper>
          </DiscoverContent>{" "}
        </>
      ) : (
        <DiscoverContent>
          <DiscoverReadMoreWrapper>
            <StdParagraqh className="discover-text">
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
            </StdParagraqh>
          </DiscoverReadMoreWrapper>
          <Container>
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
          </Container>
        </DiscoverContent>
      )}
    </DiscoverWrapper>
  );
}
