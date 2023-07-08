import Image from 'next/image';
import IconLogo from '@assets/growing-abroad/growing-abroad-icon-logo-small.png';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
`;

const LoadingWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Spinner = styled.div`
    animation: ${spinAnimation} 1s infinite linear;
`;

export default function LoadingComponent() {
    return(
        <LoadingWrapper>
            <Spinner>
                <Image 
                src={IconLogo} 
                alt='growing abroad icon logo' 
                width={40}
                height={40} />
            </Spinner>
        </LoadingWrapper>
    );
}
