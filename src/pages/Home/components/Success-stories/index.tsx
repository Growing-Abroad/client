import FancyCarousel from '@/components/Fancy-carousel';
import TwoColorTitle from '@/components/two-color-title';
import { successStoriesData } from '@/utils/mock-ups/success-stories-mock';
import { SuccessSubtitle, SucessStoriesWrapper } from './style';

export default function SuccessStories() {
  return (
    <SucessStoriesWrapper>
      <TwoColorTitle
        text1="Success"
        text2="Stories"
        hasSpaceBtw
        fontSize="2.5rem"
      />
      <SuccessSubtitle>
        With our help customers from all over the world land their dream jobs -
        from innovative start ups to the worlds leading companies
      </SuccessSubtitle>
      <FancyCarousel dataArray={successStoriesData} />
    </SucessStoriesWrapper>
  );
}
