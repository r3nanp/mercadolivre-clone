import React from 'react';

import { Container, SearchForm, SearchIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <SearchForm>
        <SearchIcon />
        <input placeholder="Buscar produtos, marcas e muito mais" />
      </SearchForm>
    </Container>
  );
};

export default Header;
