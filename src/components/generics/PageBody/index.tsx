import { PropsWithChildren } from 'react';
import Wave, { EWaveType } from "@/components/Wave";
import styled from "styled-components";

export interface IStyledPageBody {
    distanceFromTop: string | number;
}

// Pages that use this component:
// - pages/candidates/index.tsx
// - pages/faq/index.tsx
// - pages/blog/index.tsx
// - pages/coaching/index.tsx
// - pages/online-course/index.tsx


const BodyLayout = styled.div<IStyledPageBody>`
    position: relative;
    z-index: 2;
    margin-top: calc(615px + 35%);
    z-index: 1;
    margin-top: calc(
        ${({distanceFromTop}) => distanceFromTop} + 60px
    );
    left: 0;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 430px) {
        margin-top: calc(
            ${({distanceFromTop}) => distanceFromTop} + -2rem
        );
    }
    @media (min-width: 1513px) {
        margin-top: calc(
            ${({distanceFromTop}) => distanceFromTop} + 7rem
        );
    }
`
export interface IPageBody extends PropsWithChildren, IStyledPageBody {
    waveType?: EWaveType,
    id?: string;
    children?: any
}

export default function PageBodyLayout({children, distanceFromTop, waveType, id}: IPageBody) {
    return (
        <BodyLayout distanceFromTop={distanceFromTop} id={id}>
            <Wave type={waveType} className="border-image" />
            {children}
        </BodyLayout>
    )
}
