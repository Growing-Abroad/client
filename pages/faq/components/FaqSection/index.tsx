import { Container, Content } from "../../../../styles/faq/FaqSection/index.styles";
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
    <Container>
      <Content>
        {accordeons.map((accordeon, index) => {
          return (
            <Accordeon
              title={accordeon.title}
              content={accordeon.content}
              key={index}
            />
          );
        })}
      </Content>
    </Container>
  );
}

export default FaqSection;
