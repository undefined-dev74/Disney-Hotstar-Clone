import React from 'react';
import {
  Container,
  Form,
  Google,
  Hero,
  Join,
  Nav,
  Section,
  SignIn,
} from './login-styled';

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
      <Section>
        <Hero>
          <h1>welcome to your professional community</h1>
          <img
            src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt="hero-img"
          />
        </Hero>
        <Form>
          <Google>
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt="Google"
            />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;
