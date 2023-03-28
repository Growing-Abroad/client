import { useCallback, useState } from 'react';

import Image, { StaticImageData } from 'next/image';

import { variables } from '@styles/global-variables';
import { removePxFromCssValue } from '@utils/scripts/general-utility';
import useAppContext from '@/hooks/useAppContext';
import StdButton from '../generics/StdButton/StdButton';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import LinkedinImage from '@/../public/assets/icons/linkedin.webp';

import {
  FlexboxSlide,
  FlexboxSlider,
  FromWrapper,
  ImageBackground,
  ImageBackgroundContent,
  LinkedinIcon,
  TextBlock,
  TextBlockH3,
} from './style';

export interface ICarouselData {
  imgSrc: StaticImageData;
  title: string;
  subtitle?: string;
  from: string;
  texts: string[];
  countryFlag: string;
  href: string;
}
export interface Props {
  dataArray: ICarouselData[];
  haveSmallsSlides?: boolean;
  isIntroducingAPerson?: boolean;
}

export default function FancyCarousel(props: Props) {
  const {
    windowSize: { width },
    isMobile,
  } = useAppContext();
  const {
    sizes: { mediaQuery },
  } = variables;
  const mediaQueryNumber = removePxFromCssValue(mediaQuery);
  const [selectedSlide, setSelectedSlide] = useState<number>(initialSlide());
  const [selectedSlideTitle, setSelectedSlideTitle] = useState<string>('');

  function initialSlide(): number {
    if (width > mediaQueryNumber && props.dataArray.length > 2) {
      return 2;
    } else {
      return 0;
    }
  }

  function handleSlideClasses(index: number): string {
    let classes = 'flexbox-slide';
    if (index % 2 !== 0) classes += ' short';
    if (selectedSlide === index) classes += ' selected-slide';
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
      return ' dontShow';
    }
    return '';
  }

  const isActive = (i: number) => selectedSlide === i;

  return (
    <FlexboxSlider
      className="flexbox-slider my-flexbox-slider"
      isSmall={props.haveSmallsSlides}
    >
      {props.dataArray.map((item, i) =>
        !props.haveSmallsSlides ? (
          <FlexboxSlide
            className={handleSlideClasses(i)}
            key={i + '-' + item.title}
            onClick={() => setSelectedSlide(i)}
          >
            <TextBlock className="text-block">
              <TextBlockH3>{item.title}</TextBlockH3>

              <FromWrapper>
                <p>{item.from}</p>
                <Image
                  src={`countries-flags/${item.countryFlag}.svg`}
                  alt={`flag of ${item.countryFlag}`}
                  width={isMobile ? 25 : 64}
                  height={isMobile ? 17.58 : 45}
                  className="country-flag"
                />
              </FromWrapper>

              <StdButton
                icon={faPlay}
                className="watch-video-btn"
                style={{ marginTop: 'auto', width: 'max-content' }}
              >
                Watch Video
              </StdButton>
            </TextBlock>
            <Image src={item.imgSrc} alt="Slide Image" className="slide-img" />
          </FlexboxSlide>
        ) : (
          <FlexboxSlide
            className={handleSlideClasses(i)}
            key={i + '-' + item.title}
            onClick={() => setSelectedSlide(i)}
            isSmall
            isActive={isActive(i)}
            isIntroducingAPerson={props.isIntroducingAPerson}
          >
            <ImageBackground
              src={item.imgSrc.src}
              isIntroducingAPerson={props.isIntroducingAPerson}
              isActive={isActive(i)}
            >
              <ImageBackgroundContent
                isIntroducingAPerson={props.isIntroducingAPerson}
                isActive={isActive(i)}
              >
                {props.isIntroducingAPerson && isActive(i) && (
                  <LinkedinIcon src={LinkedinImage.src} alt="Linkedin" />
                )}
                <h3>{item.title}</h3>
                {item.subtitle && <h4>{item.subtitle}</h4>}
                <div className="paragraph-container">
                  <p>{item.from}</p>
                  {item.texts.length && item.texts.map((text) => <p>{text}</p>)}
                </div>
                {!props.isIntroducingAPerson && (
                  <StdButton
                    style={{
                      marginTop: `${isMobile ? '36px' : 'auto'}`,
                      marginBottom: `${isMobile ? '36px' : 'auto'}`,
                      width: `${isMobile ? '196px' : 'max-content'}`,
                      height: `${isMobile ? '35px' : 'auto'}`,
                      fontSize: `${isMobile ? '14px' : '19px'}`,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    Find Experts Now
                  </StdButton>
                )}
              </ImageBackgroundContent>
            </ImageBackground>
          </FlexboxSlide>
        ),
      )}
    </FlexboxSlider>
  );
}
