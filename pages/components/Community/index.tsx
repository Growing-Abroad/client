import {CardsWrapper, Container, ContainerWrapper, Socials} from "./styles";
import { socials1, socials2 } from "@utils/socials";
import TwoColorTitle from "@components/two-color-title";
import SocialCard from "./SocialCard";
import useAppContext from "@/hooks/useAppContext";

function CommunitySection() {
 const { isMobile } = useAppContext(); 
 return (
    <ContainerWrapper>
      <Container>
        <TwoColorTitle
          text1="Join our"
          text2="Community"
          hasSpaceBtw
          color="#ffffff !important"
          as="h2"
          wrapperStyles={isMobile ? {flexDirection: 'column', maxWidth: '100%'} : {}}
          styles={isMobile ? {lineHeight: '44px'} : {}}
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