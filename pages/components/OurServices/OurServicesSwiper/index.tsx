import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import * as S from './styles';
import OurServicesCard from '@pages/components/OurServices/OurServicesCard';
import { services } from '@utils/services';

export default function OurServicesSwiper() {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <S.Container>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 60
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 100
          }
        }}
        navigation
        pagination
        style={{ padding: '0 50px' }}
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
