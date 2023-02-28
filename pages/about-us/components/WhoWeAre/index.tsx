import TwoColorTitle from "@components/two-color-title";
import { socials } from "@utils/socials";
import React from "react";
import * as S from "./styles";
import UanAndManu from '@assets/about-us/about-us-coaches.webp';
import Image from "next/image";
import {AiFillYoutube} from "react-icons/ai";
import { theme } from "@styles/theme";

function WhoWeAre() {
  const youtube = socials.find((social) => social.name === "youtube");
  const { colors: {secondaryBlue} } = theme;

  return (
    <S.Container>
      <TwoColorTitle text1="Who we" text2="are" hasSpaceBtw />

      <div style={{position: 'relative'}}>
        <a href={youtube?.socialLink} target="_blank" rel="noreferrer">
          <Image src={UanAndManu} alt="Growing abroad Coaches Image" width={960} height={540} style={{aspectRatio: '16:9'}} />
        </a>
        <S.VideoPlayButtonWrapper>
          <AiFillYoutube style={{fontSize: '75px', fill: secondaryBlue}}/>
          <span></span>
        </S.VideoPlayButtonWrapper>
      </div>

      <S.Paragraph>
        <span>
          Growing abroad helps qualified people that dream to live and work
          abroad, but have no clue on where to start in order to achieve that.
          These are people who speak English, have either a University degree or
          a completed vocational training and do not see many opportunities in
          their home country. We will be with you through the whole application
          process and help you to optimize your CV and application documents
          into German standards, help you to look for adequate jobs, help you to
          rock your job interview to get the job you admire.
        </span>
        <span>
          We provide a life-changing experience where you will learn a different
          language, get to know a new culture and have a different perspective
          in your life.
        </span>
      </S.Paragraph>
    </S.Container>
  );
}

export default WhoWeAre;
