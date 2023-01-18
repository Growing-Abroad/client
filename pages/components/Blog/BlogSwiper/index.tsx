
import 'swiper/swiper-bundle.css';
import * as S from './styles';
import {useWindowSize} from "@/src/hooks/useWindowSize";
import {posts} from "@/src/utils/blog_posts";
import SwiperCore, {Navigation} from "swiper";
import BlogCard from "@/pages/components/Blog/BlogCard";
import {Swiper, SwiperSlide} from "swiper/react";


export default function BlogSwiper() {
  SwiperCore.use([Navigation]);
  const [width] = useWindowSize();

  const handleSwiperCards = (mobile: number, desktop: number) => {
    return width < 768 ? mobile : desktop;
  };

  return (
    <S.Container>
      <Swiper
        slidesPerView={handleSwiperCards(2, 3)}
        spaceBetween={handleSwiperCards(2, 60)}
        navigation
        loop
        style={{ padding: '0 60px' }}

      >
        {posts.map((post) => (
          <SwiperSlide key={post.id} zoom>
            <BlogCard {...post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
}
