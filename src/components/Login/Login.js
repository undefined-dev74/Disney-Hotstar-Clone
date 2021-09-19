import React from 'react';
import { Container, Join, Nav, SignIn } from './login-styled';

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img
            src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
            alt="LinkdIn Logo"
          />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
    </Container>
  );
};

export default Login;
