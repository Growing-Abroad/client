import {
  CardsWrapper,
  Container,
  ContainerWrapper,
  Socials,
} from "@/styles/pages-styles/candidates/Community/index.styles";
import { socials1, socials2 } from "@utils/socials";
import TwoColorTitle from "@components/two-color-title";
import SocialCard from "./SocialCard";
import { useEffect, useRef, useState } from "react";
import useAppContext from "@/hooks/useAppContext";

function CommunitySection() {
  const [counterOn, setCounterOn] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useAppContext();

  function isComponentVisible() {
    const rect = componentRef?.current?.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    if (!rect) return;
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    return vertInView && horInView;
  }

  useEffect(() => {
    function handleScroll() {
      if (isComponentVisible()) {
        onEnter();
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onEnter = () => {
    setCounterOn(true);
  };

  return (
    <ContainerWrapper ref={componentRef}>
      <Container>
        <TwoColorTitle
          text1="Join our"
          text2="Community"
          hasSpaceBtw
          color="#ffffff"
          as="h2"
          breakingLine={isMobile}
        />
        <Socials>
          <CardsWrapper>
            {socials1.concat(socials2).map((social) => (
              <SocialCard
                counterOn={counterOn}
                {...social}
                key={social.socialLink}
              />
            ))}
          </CardsWrapper>
        </Socials>
      </Container>
    </ContainerWrapper>
  );
}

export default CommunitySection;
