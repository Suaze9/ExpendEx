import React from 'react';
import { Container } from 'react-bootstrap'

import '../Styles/Home.css'

import { getCategories } from '../Helpers/Interface'

const Home = () => {
  return (
    <Container className="bodyContainer">
      <h1>Home</h1>
    </Container>
  );
};

export default Home;