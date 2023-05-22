import { successStoriesData } from "@utils/mock-ups/success-stories-mock";
import {
  SuccessSubtitle,
  SucessStoriesWrapper,
} from "../../../../styles/candidates/components/Success-stories/index.styles";
import TwoColorTitle from "@components/two-color-title";
import FancyCarousel from "@components/Fancy-carousel";
import OriginalFancyCarousel from "@/components/OriginalFancyCarousel";

export default function SuccessStories() {
  return (
    <SucessStoriesWrapper>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <TwoColorTitle text1="Success" text2="Stories" hasSpaceBtw as="h2" />
      <SuccessSubtitle>
        Customers from all over the world landed their dream job in Germany and many other countries in Europe
      </SuccessSubtitle>
      <OriginalFancyCarousel dataArray={successStoriesData} />
    </SucessStoriesWrapper>
  );
}
