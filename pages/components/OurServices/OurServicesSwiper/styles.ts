import styled from 'styled-components'
import { variables } from '@styles/global-variables'

export const Container = styled.div`
  width: min( 100%, ${variables.sizes.maxWidthAll});
  display: flex;
  justify-content: center;
  height: 100%;

  .swiper-container {
    list-style: none;
    width: 100%;
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
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-pagination{
    bottom: 0;
  }

`
