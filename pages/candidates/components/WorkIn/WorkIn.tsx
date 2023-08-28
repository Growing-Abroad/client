import * as S from "@/styles/pages-styles/candidates/WorkIn/index.styles";
import studentHat from "@/../public/assets/student-hat.svg";
import worldPicture from "@/../public/assets/world-icon.svg";
import expertPicture from "@/../public/assets/person-icon.svg";
import WorkInCard from "./WorkInCard";
import TwoColorTitle from "@/components/two-color-title";
import { title } from "process";

const itens = {
  candidates: [
    {
      title: "Student or Professional",
      photo: studentHat,
      description:
        "No matter if you have a higher education degree or you are still studying , we will make it possible for you to get your dream job.",
    },
    {
      title: "Start your new life in Europe",
      photo: worldPicture,
      description:
        "For people who are already in Germany or Europe and also for people who are not and want to relocate.",
    },
    {
      title: "High Qualified Experts",
      photo: expertPicture,
      description:
        "As German experts with over 10 years experience on the European market, we guide you through the whole application process.",
    },
  ],
  companies: [
    {
      title: "Talent Shortage",
      photo: studentHat,
      description:
        "Are you facing difficulties in attracting top talents due to a lack of qualified candidates and the rising demand of open positions?",
    },
    {
      title: "Time-to-Hire",
      photo: worldPicture,
      description:
        "Balancing between a thorough hiring process and the need to fill positions quickly can be tough. Lengthy processes might make you lose good candidates, but rushing can lead to bad hiring choices",
    },
    {
      title: "Qualified experts",
      photo: expertPicture,
      description:
        "Finding the right candidates with the required skills and experience can be a significant challenge, especially in competitive industries or for specialized roles",
    },
  ],
};

interface IWorkInProps {
  pageType?: "cadidates" | "companies";
}

function WorkIn({ pageType = "cadidates" }: IWorkInProps) {
  return (
    <S.Container>
      <TwoColorTitle
        text1="English Speaking Jobs in"
        text2="Germany"
        hasSpaceBtw
        as="h2"
        wrapperStyles={{ maxWidth: "100%" }}
      />

      <S.CardSpace>
        {pageType == "cadidates" ? (
          <>
            {itens.candidates.map((item, idx) => (
              <WorkInCard
                key={idx}
                title={item.title}
                photo={studentHat}
                description={item.description}
              />
            ))}
          </>
        ) : (
          <>
            {itens.companies.map((item, idx) => (
              <WorkInCard
                key={idx}
                title={item.title}
                photo={item.photo}
                description={item.description}
              />
            ))}
          </>
        )}
        {/* <WorkInCard
          title="Student or Professional"
          description="No matter if you have a higher education degree or you are still studying , we will make it possible for you to get your dream job."
        />
        <WorkInCard
          title="Start your new life in Europe"
          description="For people who are already in Germany or Europe and also for people who are not and want to relocate."
        />
        <WorkInCard
          title="High Qualified Experts"
          photo={expertPicture}
          description="As German experts with over 10 years experience on the European market, we guide you through the whole application process."
        /> */}
      </S.CardSpace>
    </S.Container>
  );
}

export default WorkIn;
