import { useCallback, useState } from "react";

import Image, { StaticImageData } from "next/image";
import { variables } from "@styles/global-variables";
import { removePxFromCssValue } from "@utils/scripts/general-utility";
import useAppContext from "@/hooks/useAppContext";
import StdButton from "../generics/StdButton/StdButton";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import LinkedinImage from "@/../public/assets/icons/linkedin.webp";
import {
  FlexboxSlide,
  FlexboxSlider,
  FromWrapper,
  ImageBackground,
  ImageBackgroundContent,
  LinkedinIcon,
  TextBlock,
  TextBlockH3,
  StdButtonContainer,
  ImageFlag,
} from "./style";

export interface ICarouselData {
  imgSrc: StaticImageData
  title: string;
  subtitle?: string;
  from: string;
  texts: string[];
  countryFlag: string;
  href: string;
}

export type index = number;

export interface IFancyCarouselProps {
  dataArray: ICarouselData[];
  haveSmallsSlides?: boolean;
  isIntroducingAPerson?: boolean;
  initialSlideIndex?: number;
  IsCentralized?: boolean;
  haveMaxWidth?: boolean;
  changeOnHover?: boolean;
  onSlideClickCallback?(index: index): void;
}

export default function FancyCarousel(props: IFancyCarouselProps) {
  const {
    windowSize: { width },
    isMobile,
  } = useAppContext();
  const {
    sizes: { mediaQuery },
  } = variables;
  const mediaQueryNumber = removePxFromCssValue(mediaQuery);
  const [selectedSlide, setSelectedSlide] = useState<number>(initialSlide());

  function initialSlide(): number {
    if (props.initialSlideIndex) return props.initialSlideIndex;
    if (width > mediaQueryNumber && props.dataArray.length > 2) {
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

  const isActive = (i: number) => selectedSlide === i;

  const handleGoToLinkedin = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  function changeSlide(i: index) {
    setSelectedSlide(i);
    props.onSlideClickCallback?.(i);
  }

  return (
    <FlexboxSlider
      className="flexbox-slider my-flexbox-slider"
      isSmall={props.haveSmallsSlides}
      isIntroducingAPerson={props.isIntroducingAPerson}
      isCentralized={props.IsCentralized}
    >
      {props.dataArray.map((item, i) =>
        !props.haveSmallsSlides ? (
          <FlexboxSlide
            className={handleSlideClasses(i)}
            key={i + "-" + item.title}
            onClick={() => setSelectedSlide(i)}
            isActive={isActive(i)}
            isSmall={props.haveSmallsSlides}
            isIntroducingAPerson={props.isIntroducingAPerson}
            haveMaxWidth={props.haveMaxWidth ?? false}
          >
            <TextBlock className="text-block">
              <TextBlockH3>{item.title}</TextBlockH3>

              <FromWrapper>
                <p>{item.from}</p>
                <ImageFlag
                  src={`countries-flags/${item.countryFlag}.svg`}
                  alt={`flag of ${item.countryFlag}`}
                  className="country-flag"
                />
              </FromWrapper>

              <StdButtonContainer>
                <StdButton icon={faPlay} className="watch-video-btn">
                  Watch Video
                </StdButton>
              </StdButtonContainer>
            </TextBlock>
            <Image src={item.imgSrc} alt="Slide Image" className="slide-img" />
          </FlexboxSlide>
        ) : (
          <FlexboxSlide
            className={handleSlideClasses(i)}
            key={i + "-" + item.title}
            onClick={() => !props.changeOnHover && changeSlide(i)}
            isSmall
            isActive={isActive(i)}
            isIntroducingAPerson={props.isIntroducingAPerson}
            haveMaxWidth={props.haveMaxWidth ?? false}
            onMouseEnter={() => props.changeOnHover && changeSlide(i)}
          >
            <ImageBackground
              src={item.imgSrc.src}
              isIntroducingAPerson={props.isIntroducingAPerson}
              isActive={isActive(i)}
              >
              <ImageBackgroundContent
                className="background-content"
                isIntroducingAPerson={props.isIntroducingAPerson}
                isActive={isActive(i)}
              >
                <div>
                  <h3>{item.title}</h3>
                  {item.subtitle && <h4>{item.subtitle}</h4>}
                  <p>{item.from}</p>
                </div>
                <div className="paragraph-container">
                  {item.texts.length &&
                    item.texts.map((text, i) => <p key={i}>{text}</p>)}
                </div>
                {!props.isIntroducingAPerson && (
                  <StdButtonContainer>
                    <StdButton
                      style={{
                        // marginTop: `${isMobile ? '6px' : 'auto'}`,
                        // marginBottom: `${isMobile ? '35%' : 'auto'}`,
                        width: isMobile ? "100%" : "max-content",
                        height: isMobile ? "80%" : "auto",
                        fontSize: isMobile ? "14px" : "19px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Find Experts Now
                    </StdButton>
                  </StdButtonContainer>
                )}
              </ImageBackgroundContent>
              {props.isIntroducingAPerson && isActive(i) && (
                <LinkedinIcon
                  onClick={() => handleGoToLinkedin(item.href)}
                  src={LinkedinImage.src}
                  alt="Linkedin"
                />
              )}
            </ImageBackground>
          </FlexboxSlide>
        )
      )}
    </FlexboxSlider>
  );
}
