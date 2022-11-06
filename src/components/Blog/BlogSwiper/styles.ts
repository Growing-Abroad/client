import styled from 'styled-components'

export const Container = styled.div`
  max-width: 20rem;
  display: flex;
  justify-content: center;
  
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

  @media (min-width: 768px) {
    max-width: 50rem;
    .swiper-button-next {
      right: 25px;
    }
  }
`


