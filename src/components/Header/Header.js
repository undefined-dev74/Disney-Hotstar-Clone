import React from 'react';
import { Container, Content, Logo, Search, SearchIcon } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img
              src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Icon-Logo.wine.svg"
              alt="BrandLogo"
            />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
              alt="SerchIcon"
            />
          </SearchIcon>
        </Search>
      </Content>
    </Container>
  );
};

export default Header;
