import FancyCarousel from '@/components/Fancy-carousel';
import TwoColorTitle from '@/components/two-color-title';
import { SuccessSubtitle, SucessStoriesWrapper } from './style';
import Img1 from '@assets/Photos Main Page/Uan-Business_Canva.png';
import Img2 from '@assets/Photos Main Page/Manu-Business_Canva.png';
import Img3 from '@assets/Photos Main Page/Sucess-Case_Canva.png';
import Img4 from '@assets/Photos Main Page/Blog-CV_Canva.png';
import Img5 from '@assets/Photos Main Page/Blog-Germany_Canva.png';

const array = [
  {
    imgSrc: Img1,
    title: 'Slide #1 is here',
    paragraph: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt.`,
    href: '',
  },
  {
    imgSrc: Img2,
    title: 'Slide #2 is here',
    paragraph: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt.`,
    href: '',
  },
  {
    imgSrc: Img3,
    title: 'Slide #3 is here',
    paragraph: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt.`,
    href: '',
  },
  {
    imgSrc: Img4,
    title: 'Slide #4 is here',
    paragraph: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt.`,
    href: '',
  },
  {
    imgSrc: Img5,
    title: 'Slide #4 is here',
    paragraph: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt.`,
    href: '',
  },
];

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
      <FancyCarousel dataArray={array} />
    </SucessStoriesWrapper>
  );
}
