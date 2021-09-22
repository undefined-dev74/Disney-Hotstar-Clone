import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Container,
  Content,
  Logo,
  Nav,
  NavList,
  NavListWrap,
  Search,
  SearchIcon,
  SignOut,
  User,
  Work,
} from './Header.styled';

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
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3884/3884324.png"
                  alt="HomeIcon"
                />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/681/681443.png"
                  alt="MyNetwork"
                />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1063/1063376.png"
                  alt="Jobs"
                />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1370/1370907.png"
                  alt="Messaging"
                />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1827/1827504.png"
                  alt="Notifications"
                />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                  alt="User"
                />
                <span>
                  Me
                  <FontAwesomeIcon icon={faCaretDown} size="lg" />
                </span>
              </a>

              <SignOut>
                <a>SignOut</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/847/847455.png"
                  alt="Work"
                />
                <span>
                  Work
                  <FontAwesomeIcon icon={faCaretDown} size="lg" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
