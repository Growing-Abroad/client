import styled from 'styled-components'
import {variables} from "@styles/global-variables";

export const Container = styled.div`
  width: min( 100%, ${variables.sizes.maxWidthAll});
  display: flex;
  justify-content: center;
  height: 100%;
  
  .swiper-container {
    list-style: none;
    width: 100%;
    overflow: hidden;
    padding: 0 50px;
    
    @media(max-width: ${variables.sizes.mediaQuery}) {
      padding: 0 36px;
    }
  }

  .pagination {
    bottom: 0;
    padding-bottom: 4px;
  }

  .slide {
    text-align: center;
    height: 320px;
    line-height: 320px;
    background: #364d79;
    overflow: hidden;
  }

  .swiper-button-next {
    right: 0px;
  }

  .swiper-button-prev {
    left: 0px;
  }

  .swiper-pagination{
    bottom: 0;
  }

`
