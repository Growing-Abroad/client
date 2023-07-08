'use client';

import styled from 'styled-components';
import leadsBg from '@/../public/assets/images/leads-bg.jpg';


export const FunnelPagesContainer = styled.div`
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background-image: url(${leadsBg.src});
  background-size: auto 100%;
  background-repeat: repeat-x;
  padding-bottom: 56px;


  .funnel-page-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 85px;
    max-width: 1513px;
    width: 100%;
    padding-inline: 20px;

    @media (min-width: 400px) {
      padding-inline: calc(1.25rem + ((1vw - 4px) * 1.7969));
    }
    @media (min-width: 1513px) {
      padding-inline: 40px;
    }

  }

`;
