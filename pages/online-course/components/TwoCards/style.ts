import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
`;
export const ContentTwoCards = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: row;
  gap: 186px;
  align-items: center;
  justify-content: center;
  padding: 89px 200px 76px;
  .right-card {
      div {
        gap: 30px;
      }
    }
`;
export const TwoCardsWrapper = styled.div`
  width: 454px;
  height: 731px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 0;
  margin: 0;
  h3,
  span,
  p {
    letter-spacing: 1.3px;
    text-align: center;
    margin: 0;
  }
  h3 {
    font-size: 32px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 48px 59px 33px;
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
    gap: 22px;
    padding: 0 38px;
    svg {
      width: 26px;
      height: 20px;
      padding:0;
      margin:0;

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
  gap: 14px;
  span{
    width:26px;
    height:20px;
  }
`;
