import styled from 'styled-components';

export const ModalLayoutOverlay = styled.div`
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(2.5px);
  width: 100%;
  height: 100%;
  position: fixed;


  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
`;


export const ModalLayoutBody = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 32px;
  position: relative;
  display: flex;
  flex-direction: column;

  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;

  @media screen and (min-width: 120rem) {
    max-width: 65%;
  }

  .modal-header {

    display: flex;
    width: 100%;
    max-width: 70%;
    justify-content: end;
    position: relative;

    .close-modal {
      position: absolute;
      height: 2.8rem;
      width: 2.8rem;
      right: 12rem;
      border-radius: 50%;
      top: -1rem;
      right: -4.2rem;
      border: 1px solid #fff;
      background: #fff;


      @media (min-width: 48rem) and (max-width: 63rem) {
        right: -8rem;
      }

      @media screen and (min-width: 75rem) {
        height: 3rem;
        width: 3rem;
        top: -1.5rem;
        right: 5.2rem;
      }


      @media screen and (min-width: 120rem) {
        right: 8rem;
      }
    }
  }


  .box-content-video {
    display: flex;
    justify-content: center;

    width: 100%;
    max-width: 100%;
    border: 7px solid #fff;
    border-radius: 10px;

    @media (min-width: 48rem) and (max-width: 63rem) {
      /* max-width: 80%; */
    }

    @media screen and (min-width: 64rem) {
      max-width: 52%;
      border: 0.7rem solid #fff;
    }

    @media screen and (min-width: 120rem) {
      max-width: 50%;
    }


    iframe {
      width: 100%;
      height: 15rem;


      @media (min-width: 48rem) and (max-width: 63rem) {
        height: 30rem;
      }

      @media screen and (min-width: 64rem) {
        height: 25rem;
      }
    }
  }

`;

