import styled from 'styled-components'
import { variables } from '@/styles/global-variables'

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  width: 100%;
  
  .swiper-container {
    list-style: none;
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

  @media (min-width: ${variables.sizes.mediaQuery}) {
    .swiper-button-next {
    }
  }
`


