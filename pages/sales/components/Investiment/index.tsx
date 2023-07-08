import React from "react";
import computers from "public/assets/images/banners-devices-view.jpg";
import Image from "next/image";
import classes from "./style.module.css";
import * as S from "../../../../styles/about-us/components/WhoWeAre/index.styles";




function Investiment() {
  
  const hadleScroll = () => {
    const sectionElement = document.getElementById("scroll-id");
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <S.Container style={{ paddingBottom: "100px" }}>
      <S.ImageContainer>
        <Image
          width={900}
          height={436}
          src={computers}
          alt="devices"
          className={classes.youtubeImage}
        ></Image>
      </S.ImageContainer>

      <S.ParagraphCustom>
        This course is an investment in <span>your <span style={{ color: "#4A9AFD" }}>Successful Future </span></span>
      </S.ParagraphCustom>
      <S.StdButtonCustom onClick={hadleScroll}>
        Get your Acess Now
      </S.StdButtonCustom>
    </S.Container>
  );
}

export default Investiment;
