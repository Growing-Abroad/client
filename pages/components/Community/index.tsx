import {CardsWrapper, Container, ContainerWrapper, Socials} from "./styles";
import { socials1, socials2 } from "@utils/socials";
import TwoColorTitle from "@components/two-color-title";
import SocialCard from "./SocialCard";

function CommunitySection() {
  return (
    <ContainerWrapper>
      <Container>
        <TwoColorTitle
          text1="Join our"
          text2="Community"
          hasSpaceBtw
          color="#ffffff !important"
          as="h2"
        />
        <Socials>
          <CardsWrapper>
            {socials1.map(social => (<SocialCard {...social} key={social.socialLink} />))}
          </CardsWrapper>
          <CardsWrapper>
            {socials2.map(social => (<SocialCard {...social} key={social.socialLink} />))}
          </CardsWrapper>
        </Socials>
      </Container>
    </ContainerWrapper>
  );
}

export default CommunitySection;