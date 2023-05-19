import styled, { css } from "styled-components";
import { EWaveType } from ".";

interface WrapperProps {
  height?: string;
  backgroundSrc?: string;
  waveType?: EWaveType;
}

export const Wrapper = styled.div<WrapperProps>`
  
  ${({ waveType }) => {
  
    if (waveType === EWaveType.curly) {
      return css`
        --mobileYoffset: 54px;
        --dynamicOffset: calc(3.375rem + ((1vw - 4.3px) * 7.7562));
        --desktopOffset: 138px;

      `
    }

    if (waveType === EWaveType.linear) {
      return css`
        --mobileYoffset: 67px;
        --dynamicOffset: calc(9.625rem + ((1vw - 15.13px) * 8.0332));
        --desktopOffset: 149px;
      `
    }
  }}

  

  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  width: 100%;
  
  top:  calc(-1 * (var(--desktopOffset)) + 2px);
  height: var(--desktopOffset);

  /* background-image: url(${({backgroundSrc}) => backgroundSrc});
  background-repeat: no-repeat;
  background-size: cover; */

  
  img {
    width: 100%;
    height: var(--desktopOffset);
  }

  @media (max-width: 1513px) {
      height: var(--dynamicOffset);
      top:  calc(-1 * (var(--dynamicOffset)) + 2px);
      
      img {
        height: var(--dynamicOffset);
      }
    }
    @media (max-width: 430px) {
      height: var(--mobileYoffset);
      top:  calc(-1 * (var(--mobileYoffset)) + 2px);
      
      img {
        height: var(--mobileYoffset);
      }
    }

`
