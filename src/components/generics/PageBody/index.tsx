import { PropsWithChildren } from 'react';
import Wave from "@/components/Wave";
import styled, { css } from "styled-components";

export interface IStyledPageBody {
    distanceFromTop: string | number;
}

const PageBody_ = styled.div<IStyledPageBody>`
    position: relative;
    z-index: 2;
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
            ${({distanceFromTop}) => distanceFromTop} + 60px
        );
    }
    @media (min-width: 1513px) {
        margin-top: calc(
            ${({distanceFromTop}) => distanceFromTop} + 90px
        );
    }
`
export interface IPageBody extends PropsWithChildren, IStyledPageBody {
}

export default function PageBody({children, distanceFromTop}: IPageBody) {
    return (
        <PageBody_ distanceFromTop={distanceFromTop}>
            <Wave type={1} className="border-image" />
            {children}
        </PageBody_>
    )
}