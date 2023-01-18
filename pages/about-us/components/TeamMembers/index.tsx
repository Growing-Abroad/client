import FancyCarousel from "@components/Fancy-carousel";
import TwoColorTitle from "@components/two-color-title";
import { successStoriesData } from "@utils/mock-ups/success-stories-mock";
import * as S from "./styles";

function TeamMembers() {
  return (
    <S.Container>
      <TwoColorTitle text1="Team" text2="Members" hasSpaceBtw />
      <FancyCarousel dataArray={successStoriesData} />
    </S.Container>
  );
}

export default TeamMembers;
