import * as S from './styles';
import TwoColorTitle from "@components/two-color-title";
import BlogSwiper from "@pages/components/Blog/BlogSwiper";
import Image from 'next/image';
import wave from '@assets/main-page/wave.svg'



export default function BlogSection() {
  return (
    <S.Container>
      <TwoColorTitle
        text1="Latest"
        text2="Blog"
        hasSpaceBtw
      />
      <h3>Choose one of our interesting topics to get more information</h3>
      <BlogSwiper />

      <S.Button>Read More</S.Button>
      <Image  width='1512' height='93' src={wave} alt="wave"/>
    </S.Container>
  );
}
