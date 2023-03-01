import { successStoriesData } from "@utils/mock-ups/success-stories-mock";
import { SuccessSubtitle, SucessStoriesWrapper } from "./style";
import TwoColorTitle from "@components/two-color-title";
import FancyCarousel from "@components/Fancy-carousel";

export default function SuccessStories() {
  return (
    <SucessStoriesWrapper>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <TwoColorTitle
        text1="Success"
        text2="Stories"
        hasSpaceBtw
      />
      <SuccessSubtitle>
        With our help customers from all over the world land their dream jobs - from innovative start ups to the worlds leading companies
      </SuccessSubtitle>
      <FancyCarousel dataArray={successStoriesData} />
    </SucessStoriesWrapper>
  );
}
