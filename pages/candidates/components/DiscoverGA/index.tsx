import {
  DiscoverContent,
  DiscoverGaImg,
  DiscoverImagesWrapper,
  DiscoverReadMoreWrapper,
  DiscoverWrapper,
} from "../../../../styles/candidates/components/DiscoverGA/index.styles";
import Uan from "@/../public/assets/Photos-Main-Page/Uan-Business_Canva.webp";
import Manu from "@/../public/assets/Photos-Main-Page/Manu-Business_Canva.webp";
import Hands from "@/../public/assets/Photos-Main-Page/high-five.webp";
import TwoColorTitle from "@components/two-color-title";
import StdParagraqh from "@/components/generics/StdParagraqh/StdParagraqh";
import StdButton from "@/components/generics/StdButton/StdButton";

export default function DiscoverGA() {
  return (
    <DiscoverWrapper>
      <TwoColorTitle
        text1="Discover"
        text2="Growing Abroad"
        hasSpaceBtw
        as="h2"
      />

      <DiscoverContent>
        <DiscoverReadMoreWrapper>
          <StdParagraqh style={{ color: "white", textAlign: "justify" }}>
            Our goal is to help skilled people from all of the world to get
            their dream job in Germany or Europe.
            <br />
            <br />
            <br />
            As experts on the German and European market, we know exactly what
            you need to bring in order to have a successful career abroad. We
            will be your mentor, your career advisor, your Coach, your friend
            and motivator.
            <br />
            <br />
            <br />
            We value everyone's experience and personality and help our
            costumers to show their full potential.
          </StdParagraqh>

          <StdButton style={{ fontSize: "20px" }}>Read More</StdButton>
        </DiscoverReadMoreWrapper>

        <DiscoverImagesWrapper>
          <DiscoverGaImg url={Uan.src} />
          <DiscoverGaImg url={Hands.src} />
          <DiscoverGaImg url={Manu.src} />
        </DiscoverImagesWrapper>
      </DiscoverContent>
    </DiscoverWrapper>
  );
}
