import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px;
`;
export const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: nowrap;

  & > a > img {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

export const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(210, 210, 210, 0.8);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

export const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 25px;
  transition-duration: 200ms;
  font-size: 16px;
  font-weight: bold;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(121, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
