import { useState } from "react";
import * as S from "./styles";
import Image, { StaticImageData } from "next/image";
import { variables } from "@styles/global-variables";
import { removePxFromCssValue } from "@utils/scripts/general-utility";
import useAppContext from "@/hooks/useAppContext";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export type TCarouselData = Array<ICarouselData>;
export interface ICarouselData {
  imgSrc: StaticImageData;
  fullTitle: string;
  mobileTitle: string;
  from: string;
  countryFlag: string;
  href: string;
}
export interface Props {
  dataArray: TCarouselData;
  openModal: (value: boolean) => void;
  visibleModal: boolean;
  getDataVideo: (value: any) => void;
  columnGap?: number;
}

export default function OriginalFancyCarousel({
  dataArray,
  openModal,
  visibleModal,
  getDataVideo,
  columnGap
}: Props) {
  const {
    windowSize: { width },
    isMobile,
  } = useAppContext();
  const {
    sizes: { mediaQuery },
  } = variables;
  const mediaQueryNumber = removePxFromCssValue(mediaQuery);
  const [selectedSlide, setSelectedSlide] = useState<number>(initialSlide());

  const handleOpenModal = ({ video }: any) => {
    getDataVideo(video);
    openModal(!visibleModal);
  };

  function initialSlide(): number {
    if (width > mediaQueryNumber && dataArray.length > 2) {
      return 2;
    } else {
      return 0;
    }
  }

  function handleSlideClasses(index: number): string {
    let classes = "flexbox-slide";
    if (index % 2 !== 0) classes += " short";
    if (selectedSlide === index) classes += " selected-slide";
    if (width && width < mediaQueryNumber)
      classes += handleMobileSliderClass(index);

    return classes;
  }

  function handleMobileSliderClass(index: number) {
    if (
      selectedSlide !== index &&
      index !== selectedSlide - 1 &&
      index !== selectedSlide + 1
    ) {
      return " dontShow";
    }
    return "";
  }

  return (
    <S.FlexboxSlider gap={isMobile ? columnGap : undefined} className="flexbox-slider my-flexbox-slider">
      {dataArray.map((item, i) => (
        <S.FlexboxSlide
          className={handleSlideClasses(i)}
          key={i + "-" + item.fullTitle}
          onClick={() => setSelectedSlide(i)}
        >
          <S.TextBlock className="text-block">
            <S.TextBlockH3>
              {isMobile ? item.mobileTitle : item.fullTitle}
            </S.TextBlockH3>

            <S.FromWrapper>
              <p>{item.from}</p>
              <S.ImageFlag
                src={item.countryFlag}
                alt={`flag of ${item.countryFlag}`}
                className="country-flag"
              />
            </S.FromWrapper>

            <S.ButtonContainer>
              <S.StdButtonCustom
                icon={faPlay}
                className="watch-video-btn"
                onClick={() => handleOpenModal(item)}
              >
                Watch Video
              </S.StdButtonCustom>
            </S.ButtonContainer>
          </S.TextBlock>

          <Image src={item.imgSrc} alt="Slide Image" className="slide-img" />
        </S.FlexboxSlide>
      ))}
    </S.FlexboxSlider>
  );
}
