import { useState } from "react";
import {
  ButtonContainer,
  FlexboxSlide,
  FlexboxSlider,
  FromWrapper,
  ImageFlag,
  TextBlock,
  TextBlockH3,
} from "./styles";
import Image, { StaticImageData } from "next/image";
import { variables } from "@styles/global-variables";
import { removePxFromCssValue } from "@utils/scripts/general-utility";
import useAppContext from "@/hooks/useAppContext";
import StdButton from "../generics/StdButton/StdButton";
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
    <FlexboxSlider gap={isMobile ? columnGap : undefined} className="flexbox-slider my-flexbox-slider">
      {dataArray.map((item, i) => (
        <FlexboxSlide
          className={handleSlideClasses(i)}
          key={i + "-" + item.fullTitle}
          onClick={() => setSelectedSlide(i)}
        >
          <TextBlock className="text-block">
            <TextBlockH3>
              {isMobile ? item.mobileTitle : item.fullTitle}
            </TextBlockH3>

            <FromWrapper>
              <p>{item.from}</p>
              <ImageFlag
                src={item.countryFlag}
                alt={`flag of ${item.countryFlag}`}
                className="country-flag"
              />
            </FromWrapper>

            <ButtonContainer>
              <StdButton
                icon={faPlay}
                className="watch-video-btn"
                onClick={() => handleOpenModal(item)}
                style={{
                  width: "100%",
                  padding: isMobile ? "8px 20px" : "20px 40px",
                  fontSize: "calc(0.875rem + ((1vw - 4.3px) * 0.5535))",
                }}
              >
                Watch Video
              </StdButton>
            </ButtonContainer>
          </TextBlock>

          <Image src={item.imgSrc} alt="Slide Image" className="slide-img" />
        </FlexboxSlide>
      ))}
    </FlexboxSlider>
  );
}
