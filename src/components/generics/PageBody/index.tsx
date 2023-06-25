import { PropsWithChildren } from 'react';
import Wave, { EWaveType } from "@/components/Wave";
import styled from "styled-components";
import { variables } from '@/styles/global-variables';

const {sizes: {mediaQuery}} = variables;
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

    @media (max-width: ${mediaQuery}) {
        margin-top: calc(
            ${({distanceFromTop}) => distanceFromTop} + 60px
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
