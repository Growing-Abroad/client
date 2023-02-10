
import 'swiper/swiper-bundle.css';
import * as S from './styles';
import {useWindowSize} from "@hooks/useWindowSize";
import {posts, IPost} from "@utils/blog_posts";
import SwiperCore, {Navigation} from "swiper";
import BlogCard from "@pages/components/Blog/BlogCard";
import {Swiper, SwiperSlide} from "swiper/react";
import { useEffect, useState } from 'react';


export default function BlogSwiper() {
  SwiperCore.use([Navigation]);
  const [width] = useWindowSize();
  const [posts_, setPosts] = useState<IPost[]>()

  const handleSwiperCards = (mobile: number, desktop: number) => {
    return width < 768 ? mobile : desktop;
  };

  useEffect(() => {
    setPosts(posts);
  },[])

  return (
    <S.Container>
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 100
          },
          940: {
            slidesPerView: 2,
            spaceBetween: 100
          },
          1230: {
            slidesPerView: 3,
            spaceBetween: 100
          },
        }}
        navigation
        loop
        style={{ padding: '0 60px' }}

      >
        {posts_?.map((post) => (
          <SwiperSlide key={post.id} zoom>
            <BlogCard {...post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
}
