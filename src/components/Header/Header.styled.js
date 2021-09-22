import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ededed;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  left: 0;
  top: 0;
  padding: 0 24px;
  position: fixed;
  width: 100vw;
  z-index: 100;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

export const Logo = styled.span`
  margin-right: 8px;
  font: 0px;

  & > a > img {
    height: 50px;
    width: 50px;
  }
`;

export const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      border: none;
      box-shadow: none;
      background-color: #f9f9f9;
      border-radius: 4px;
      color: rgba(0, 0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      border-color: #dce6f1;
      vertical-align: text-top;
      height: 34px;
    }
  }
`;
export const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-content: center;

  & > img {
    width: 15px;
    height: 15px;
  }
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
  }
`;

export const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 2px solid #000000;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

export const NavList = styled.li`
  display: flex;
  align-items: center;

  a,
  .navicon {
    align-items: center;
    background: transparent;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    height: 52px;
    width: 80px;
    position: relative;
    text-decoration: none;

    img {
      height: 24px;
      width: 24px;
      min-height: auto;
      min-width: auto;
    }

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 12px;
      line-height: 18px;
      font-weight: normal;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    animation: all ease-in 2s;
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export const User = styled(NavList)``;
export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.8);
`;

export const SignOut = styled.div`

psa
`;
