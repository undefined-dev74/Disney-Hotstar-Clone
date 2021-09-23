import React from 'react';
import LeftSide from '../LeftSide/LeftSide';
import Main from '../Main/Main';
import RightSide from '../RightSide/RightSide';
import { Container, Layout, Section } from './Home.styled';

const Home = () => {
  return (
    <div>
      <Container>
        <Section>
          <h5>
            <a>Hiring in a hurry?</a>
            <p>
              Find talented person in a record time with Upwork and keep
              business moving
            </p>
          </h5>
        </Section>
        <Layout>
          <LeftSide />
          <Main />
          <RightSide />
        </Layout>
      </Container>
    </div>
  );
};

export default Home;
