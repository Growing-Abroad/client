import * as S from "@/styles/pages-styles/candidates/OurServices/index.styles";
import TwoColorTitle from "@components/two-color-title";
import OurServicesSwiper from "./OurServicesSwiper";

export default function OurServicesSection() {
  return (
    <S.Container>
      <TwoColorTitle text1="Explore our" text2="Services" hasSpaceBtw as="h2" wrapperClassName="ourservices-title-wrapper" />
      <OurServicesSwiper />
    </S.Container>
  );
}
