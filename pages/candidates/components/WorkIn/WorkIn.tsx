import * as S from "../../../../styles/candidates/components/WorkIn/index.styles";
import studentHat from "@/../public/assets/student-hat.svg";
import worldPicture from "@/../public/assets/world-icon.svg";
import expertPicture from "@/../public/assets/person-icon.svg";
import WorkInCard from "./WorkInCard";
import TwoColorTitle from "@/components/two-color-title";
import useAppContext from "@/hooks/useAppContext";

function WorkIn() {
  const { isMobile } = useAppContext();
  return (
    <S.Container>
      <TwoColorTitle
        text1="English Speaking Jobs in"
        text2="Germany"
        hasSpaceBtw
        as="h2"
        wrapperStyles={{maxWidth: '100%'}}
      />

      <S.CardSpace>
        <WorkInCard
          title="Student or professional"
          photo={studentHat}
          description="No matter if you have a higher education degree or you are still studying , we will make it possible for you to get your dream job."
        />
        <WorkInCard
          title="Start your new life in Europe"
          photo={worldPicture}
          description="For people who are already in Germany or Europe and also for people who are not and want to relocate."
        />
        <WorkInCard
          title="High qualified experts"
          photo={expertPicture}
          description="As German experts with over 10 years experience on the European market, we guide you through the whole application process."
        />
      </S.CardSpace>
    </S.Container>
  );
}

export default WorkIn;
