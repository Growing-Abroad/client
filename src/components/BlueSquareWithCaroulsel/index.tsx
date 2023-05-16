import {
    CarouselContainer,
    DiscoverContent,
    IContentProps,
} from "@components/BlueSquareWithCaroulsel/style";
import FancyCarousel, { ICarouselData, index } from "../Fancy-carousel";
import { PropsWithChildren } from 'react';

export interface IBlueSquareProps extends PropsWithChildren, IContentProps {
    carouselData: ICarouselData[];
    onSlideClickCallback?(index: index): void;
    changeOnHover?: boolean;
}

export default function BlueSquareWithCarousel({ carouselData, children, changeOnHover, onSlideClickCallback, columnReversed }: IBlueSquareProps) {

    return (
        <DiscoverContent columnReversed={columnReversed} >
            {children}

            <CarouselContainer>
                <FancyCarousel
                    initialSlideIndex={1}
                    haveSmallsSlides
                    dataArray={carouselData}
                    IsCentralized
                    isIntroducingAPerson
                    onSlideClickCallback={onSlideClickCallback}
                    changeOnHover={changeOnHover}
                />
            </CarouselContainer>
        </DiscoverContent>
    );
}