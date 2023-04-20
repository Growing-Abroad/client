import TwoColorTitle from "@components/two-color-title";
import { successStoriesData } from "@utils/mock-ups/success-stories-mock";
import * as S from "../../../../styles/about-us/components/TeamMembers/index.styles";
import OriginalFancyCarousel from "@/components/OriginalFancyCarousel";

function TeamMembers() {
  return (
    <S.Container>
      <TwoColorTitle text1="Team" text2="Members" hasSpaceBtw as="h2" />
      <OriginalFancyCarousel dataArray={successStoriesData} />
    </S.Container>
  );
}

export default TeamMembers;
