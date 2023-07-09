import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 65px;
`;

export const PopupContent = styled.div`
  position: relative;
  max-height: 500px;
  background-color: white;
  padding: 7px;
  border-radius: 4px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #555;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 100%;
    margin: -46px -46px 0 0;
`;