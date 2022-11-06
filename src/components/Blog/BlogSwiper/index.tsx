import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import * as S from './styles'
import { posts } from '../../../utils/blog_posts';
import BlogCard from '../BlogCard';
import { useWindowSize } from '../../../hooks/useWindowSize';

export default function BlogSwiper() {
  SwiperCore.use([Navigation]);
  const [ width ] = useWindowSize()

  const handleSwiperCards = (mobile: number, desktop:number) => { 
    return width < 768 ? mobile : desktop
  }

  return (
    <S.Container>
      <Swiper 
        slidesPerView={handleSwiperCards(2,3)} 
        spaceBetween={handleSwiperCards(2,3)} 
        navigation
      >
        {posts.map((post)=>(
          <SwiperSlide key={post.id}>
            <BlogCard {...post}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
}
