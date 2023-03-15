import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

 `

export const SelectLangWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    .hide {
      visibility: hidden;
      position: absolute;
      top: -55px;
    }
`

export const SelectLangLabel = styled.label`
  border-radius: 4px;
  background-color: white;
  width: min-content;
  cursor: pointer;
  height: 30.5px !important;
  min-height: 30.5px !important;

  img {
    width: 30px;
  }
`