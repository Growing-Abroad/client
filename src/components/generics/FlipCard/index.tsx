import { CSSProperties, ReactNode } from "react";
import styled, { css } from "styled-components"

export const WrapperFlip = styled.div`
    ${({style}) => (css`
            .flip-card {
                position: relative;
                transform-style: preserve-3d;
                width: ${style!.width};
                height: ${style!.height};
            }

            .flip-card-inner {
                position: absolute;
                width: ${style!.width};
                height: ${style!.height};
                transition: transform 0.3s;
                transform-style: preserve-3d;
                transform: rotateX(0deg) rotateY(0deg);
            }

            .flip-card:hover .flip-card-inner {
                transform: rotateX(360deg) rotateY(360deg);
            }
            
            .flip-card-front, .flip-card-back {
                position: absolute;
                width: ${style!.width};
                height: ${style!.height};
                backface-visibility: visible;
            }
            .flip-card-front{
                background-color: white;
            }

            .flip-card-back {
                background-color: white;
                transform: rotateX(180deg) rotateY(180deg);
                visibility: hidden;
            }

            .flip-card:hover .flip-card-back {
                transform: rotateX(0deg) rotateY(0deg);
                visibility: visible;
            }
            .flip-card:hover .flip-card-front {
                visibility: hidden;
            }

        `
    )}
`

export interface IFlipCard {
    style?: CSSProperties;
    frontContent: ReactNode;
    backContent: ReactNode;
    width: string;
    height: string
}

export default function FlipCard({
    style, frontContent, backContent, width, height
}: IFlipCard) {
    return(
        <WrapperFlip style={{...style, width, height}}>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        {frontContent}
                    </div>
                    <div className="flip-card-back">
                        {backContent}
                    </div>
                </div>
            </div>
        </WrapperFlip>
    )
}