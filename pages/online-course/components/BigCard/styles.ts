import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 87px 0 230px 0;
`;
export const BigCardWrapper = styled.div`
  width: 705px;
  height: 1472px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  h1,
  h2,
  span,
  p {
    letter-spacing: 1.3px;
    text-align: center;
    margin:0;
  }
  h1 {
    font-size: 60px;
    padding-bottom: 40px;
    padding-top: 18px;
  }
  h2 {
    font-size: 32px;
    padding: 0 70px 36px;
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
    align-items: center;
    justify-content: center;
    gap: 26px;
    padding: 24px 56px 55px 91px;
  }
`;
export const PriceSpan = styled.span`
  font-size: 60px;
  text-align: center;
  width: 100%;
`;

export const CardText = styled.li`
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: left;
  font-weight: 400;
  max-height: 64px;
  line-height: 26px;
  font-size: 16px;
  letter-spacing: 0.04em;
  gap: 26px;
`;
