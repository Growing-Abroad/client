import styled from 'styled-components';
import {variables} from "@styles/global-variables";
import { theme } from '@/styles/theme';


const {sizes: {mediaQuery, maxWidthAll}} = variables;
const {colors: { blue700}} = theme;

export const AdminContainer = styled.div`
  max-width: ${maxWidthAll};
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: ${mediaQuery}) {
  }
`

export const Container = styled.div`
`;

export const ListSection = styled.div`
  flex: 1;
  border-right: 1px solid #ccc;
  padding: 20px;
  overflow-y: auto;
`;

export const DetailsSection = styled.div`
  flex: 2;
  padding: 20px;
  overflow-y: auto;

  h2 {
    color: ${blue700};
  }

  .files-list {
    display: flex;
    gap: 12px;
    align-items: baseline;
  }
`;

export const FileButton = styled.button`
  all: unset;
`;

export const SearchBox = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${blue700};
  border-radius: 4px;
`;

export const UserList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #eaeaea;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

