import {
    CarouselContainer,
    DiscoverContent,
} from "@components/BlueSquareWithCaroulsel/style";
import FancyCarousel, { ICarouselData, index } from "../Fancy-carousel";
import { PropsWithChildren } from 'react';

export interface IBlueSquareProps extends PropsWithChildren {
    carouselData: ICarouselData[];
    onSlideClickCallback?(index: index): void;
}

export default function BlueSquareWithCarousel({ carouselData, children, onSlideClickCallback }: IBlueSquareProps) {

    return (
        <DiscoverContent>
            {children}

            <CarouselContainer>
                <FancyCarousel
                    initialSlideIndex={1}
                    haveSmallsSlides
                    dataArray={carouselData}
                    IsCentralized
                    isIntroducingAPerson
                    onSlideClickCallback={onSlideClickCallback}
                    changeOnHover={true}
                />
            </CarouselContainer>
        </DiscoverContent>
    );
}