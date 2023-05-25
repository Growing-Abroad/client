import TwoColorTitle from "@components/two-color-title";
import * as S from "../../../../styles/about-us/components/TeamMembers/index.styles";
import OriginalFancyCarousel from "@/components/OriginalFancyCarousel";
import { successStoriesData } from "@/components/SuccessStoriesSection/mock";

function TeamMembers() {
  return (
    <S.Container>
      <TwoColorTitle text1="Team" text2="Members" hasSpaceBtw as="h2" />
      <OriginalFancyCarousel dataArray={successStoriesData} />
    </S.Container>
  );
}

export default TeamMembers;
