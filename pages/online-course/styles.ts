import styled from "styled-components";

export const OnlineCourseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  zoom: 90%;
  z-index: 1;


  div#page-onlie-course {

    margin-top: calc( 720px + 3%);

    @media screen and (max-width: 360px) {
      margin-top: calc(720px - 15%)
    }

    @media screen and (min-width: 1000px) {
      margin-top: calc(800px - 10%);
    }

    @media screen and (min-width: 1280px)  {
      margin-top: calc( 800px + 1.3rem );
    }
  }
`;

