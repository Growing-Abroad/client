import "swiper/swiper-bundle.css";
import * as S from "../../../../../styles/candidates/components/Blog/BlogSwiper/index.styles";
import { posts, IPost } from "@utils/blog_posts";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import useAppContext from "@hooks/useAppContext";
import BlogCard from "../BlogCard";

export default function BlogSwiper() {
  SwiperCore.use([Navigation]);
  const {
    windowSize: { width },
  } = useAppContext();
  const [posts_, setPosts] = useState<IPost[]>(posts);

  const handleSwiperCards = (mobile: number, desktop: number) => {
    return width < 768 ? mobile : desktop;
  };

  // useEffect(() => {
  //   setPosts(posts);
  // }, []);

  return (
    <S.Container>
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          940: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          1230: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
        navigation
        loop
        style={{ padding: "0 60px" }}
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
