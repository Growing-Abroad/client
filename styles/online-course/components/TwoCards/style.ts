import styled from 'styled-components';
import { variables } from '@styles/global-variables';
import { theme } from '@styles/theme';

const {
  colors: { blue700, blue500, white },
} = theme;
const {
  sizes: { maxWidthAll, mediaQuery },
} = variables;

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  padding-bottom: 160px;
`;
export const ContentTwoCards = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: row;
  gap: 186px;
  align-items: center;
  justify-content: center;
  padding: 49px 100px 46px;
  .right-card {
    div {
      gap: 26.5px;
    }
  }
  @media (max-width: ${mediaQuery}) {
    flex-direction: column;
    gap: 42px;
    padding:50px 200px 76px;
    .right-card{
      h3{
        font-size: 30px;
        padding: 26px 31px 30px 32px;
      }
    }
    .right-card{

      h3{
        svg{
          margin-bottom:-15px;
        }
      }
    }
  }
`;
export const TwoCardsWrapper = styled.div`
  width: 430px;
  height: auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
  }
  margin: 0;
  h3,
  span,
  p {
    letter-spacing: 1.3px;
    text-align: center;
    margin: 0;
    color: ${blue700};
  }
  h3 {
    font-size: 32px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 28px 59px 18px;
    letter-spacing: 1.3px;
  }
  p {
    font-size: 24px;
    span {
      text-decoration: line-through;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    gap: 30px;
    padding: 0 38px;
    svg {
      width: 26px;
      height: 20px;
      padding: 0;
      margin: 0;
    }
  }

  @media (max-width: ${mediaQuery}) {
    width:350px;
    height:auto;
    div{
      gap:36px;
    }
    h3{
      padding: 26px 62px 36px 0px;
      gap:0px;
      font-size:30px;
      svg{
        margin-top:-10px;
      }
    }

    }
`;
export const CardText = styled.li`
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: left;
  font-weight: 400;
  max-width: 407px;
  max-height: 35px;
  line-height: 19px;
  font-size: 16px;
  letter-spacing: 0.04em;
  color: ${blue700};
  gap: 14px;
  span {
    width: 26px;
    height: 20px;
  }
  @media (max-width: ${mediaQuery}) {
    max-width:360px;
    height:auto;
    font-weight:400;
  }
`;
