import * as S from './styles'
import TwoColorTitle from '@components/two-color-title';
import BlogSwiper from '@components/Blog/BlogSwiper';

export default function BlogSection (){
  return (
    <S.Container>
      <TwoColorTitle text1='Read Our' text2='Blog' fontSize='2.5rem' hasSpaceBtw />
      <h3>Choose one of our interesting topics to get more information</h3>
      <BlogSwiper />

      <S.Button>
        Read More
      </S.Button>
    </S.Container>
  )
}