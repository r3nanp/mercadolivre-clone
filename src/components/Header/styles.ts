import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai'

export const Container = styled.div`
  width: 100%;
  height: 48px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-white);

  padding-left: 10px;
  width: 40%;
  input {
    color: var(--color-gray);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
  fill: var(--color-gray);
  border-right: 1px solid var(--color-border);
`;
