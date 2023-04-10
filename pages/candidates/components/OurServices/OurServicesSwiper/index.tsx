import "swiper/swiper-bundle.css";
import * as S from "../../../../../styles/candidates/components/OurServices/OurServicesSwiper/index.styles";
import { services } from "@utils/services";
import SwiperCore, { Navigation, Pagination } from "swiper";
import OurServicesCard from "../OurServicesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { variables } from "@/styles/global-variables";
import { removePxFromCssValue } from "@/utils/scripts/general-utility";

export default function OurServicesSwiper() {
  SwiperCore.use([Navigation, Pagination]);
  const {
    sizes: { mediaQuery },
  } = variables;
  const mediaQueryNum = removePxFromCssValue(mediaQuery);

  return (
    <S.Container>
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          940: {
            slidesPerView: 2,
            spaceBetween: 53,
          },
          1230: {
            slidesPerView: 3,
            spaceBetween: 53,
          },
        }}
        navigation
        pagination
        autoplay
        className="mySwiper swiper-container"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id} zoom>
            <OurServicesCard {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
}
