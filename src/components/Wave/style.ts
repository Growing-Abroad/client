import styled from "styled-components";

interface WrapperProps {
  height?: string;
  backgroundSrc?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  
  --mobileYoffset: 67px;
  --dynamicOffset: calc(9.625rem + ((1vw - 15.13px) * 8.0332));
  --desktopOffset: 150px;

  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  width: 100%;
  
  top:  calc(-1 * (var(--desktopOffset)));
  height: var(--desktopOffset);

  /* background-image: url(${({backgroundSrc}) => backgroundSrc});
  background-repeat: no-repeat;
  background-size: cover; */

  
  img {
    width: 100%;
  }

  @media (max-width: 1513px) {
      height: var(--dynamicOffset);
      top:  calc(-1 * (var(--dynamicOffset)));
    }
    @media (max-width: 430px) {
      height: var(--mobileYoffset);
      top:  calc(-1 * (var(--mobileYoffset)));
    }
`
