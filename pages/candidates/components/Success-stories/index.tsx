import { successStoriesData } from "@utils/mock-ups/success-stories-mock";
import {
  SuccessSubtitle,
  SucessStoriesWrapper,
} from "../../../../styles/candidates/components/Success-stories/index.styles";
import TwoColorTitle from "@components/two-color-title";
import FancyCarousel from "@components/Fancy-carousel";

export default function SuccessStories() {
  return (
    <SucessStoriesWrapper>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <TwoColorTitle text1="Success" text2="Stories" hasSpaceBtw as="h2" />
      <SuccessSubtitle>
        customers from all over the world land their dream jobs - from
        innovative start ups to the worlds leading companies
      </SuccessSubtitle>
      <FancyCarousel haveMaxWidth dataArray={successStoriesData} />
    </SucessStoriesWrapper>
  );
}
