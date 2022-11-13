import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import * as S from './styles';
import OurServicesCard from '@pages/Home/components/OurServices/OurServicesCard';
import { services } from '@utils/services';

export default function OurServicesSwiper() {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <S.Container>
      <Swiper
        breakpoints= {{
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          }
      }}
        navigation
        pagination
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