import TwoColorTitle from "@/src/components/two-color-title";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import { socials } from "@/src/utils/socials";
import React from "react";
import * as S from "./styles";

function WhoWeAre() {
  const youtube = socials.find((social) => social.name === "youtube");
  const [width] = useWindowSize();
  return (
    <S.Container>
      <TwoColorTitle text1="Who we" text2="are" hasSpaceBtw />
      <a href={youtube?.socialLink} target="_blank" rel="noreferrer">
        <img
          src={`https://via.placeholder.com/${
            width >= 1024 ? "960x500" : "350x300"
          }`}
          alt="Growing Abroad Video"
        />
      </a>
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
