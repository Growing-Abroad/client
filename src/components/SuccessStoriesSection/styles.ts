import styled from 'styled-components';
import { variables } from "@/styles/global-variables";

const {
  sizes: {
    globalHorizontalPaddingMobile,
  },
} = variables;


export const SuccessStoriesWrapperSection = styled.section`
    padding: 120px 140px 120px;
    max-width: 1800px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    zoom: 85%;
    transform: scale(.9);


    @media(max-width:430px) {
      padding: 80px ${globalHorizontalPaddingMobile} 133px;
      gap: 30px;
    }
`;
