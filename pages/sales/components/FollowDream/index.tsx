import TwoColorTitle from "@components/two-color-title";
import React from "react";
import classes from "./style.module.css";
import * as S from "../../../../styles/about-us/components/WhoWeAre/index.styles";
import useAppContext from "@/hooks/useAppContext";
import StdButton from "@/components/generics/StdButton/StdButton";

function FollowDreams() {
  const { isMobile } = useAppContext();

  const hadleScroll = () => {
    const sectionElement = document.getElementById("scroll-id");
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <S.Container className="sales">
      <TwoColorTitle
        text1="Start your journey!"
        text2="Follow your Dream!"
        hasSpaceBtw
        className={classes.followDreamsTitle}
        fontSize={isMobile ?"36px" :"52px"}
        wrapperStyles={{
          flexDirection:"column",
          justifyContent: "center",
        }}
        as="h2"
      />

      <S.UIIframeYoutube width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvRBJ1Hnui0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></S.UIIframeYoutube>

      <S.Paragraph className="sales">
        <p  className={`${classes.resume} subtitle`}>
          In this life changing Online Course we included all our insights,
          strategies and methods for you to successfully get a job in Germany or
          Europe.
        </p>
      </S.Paragraph>
      <StdButton onClick={hadleScroll}>Buy Online Course Now</StdButton>
    </S.Container>
  );
}

export default FollowDreams;
