import * as S from "../../../../styles/faq/FaqSection/index.styles";
import Accordeon from "./Accordeon";


type Accordeon = {
  title: string;
  content: string;
};

type FaqSectionProps = {
  accordeons: Accordeon[];
};

function FaqSection({ accordeons }: FaqSectionProps) {
  return (
    <S.FaqSectionContainer>
      <S.FaqSectionContent>
        {accordeons.map((accordeon, index) => {
          return (
            <Accordeon
              title={accordeon.title}
              content={accordeon.content}
              key={index}
            />
          );
        })}
      </S.FaqSectionContent>
    </S.FaqSectionContainer>
  );
}

export default FaqSection;
