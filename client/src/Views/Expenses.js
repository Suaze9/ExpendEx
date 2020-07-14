import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap'

import '../Styles/Home.css'

import { getTotal } from '../Helpers/API'
import CategoryBarModify from '../Components/CategoryBarModify';

const Expenses = () => {

  const [state, setState] = useState({
    data: {},
    error: false,
    loading: true,
  });

  useEffect(()=>{
    getTotal("month")
      .then((res)=>{
        setState({
          data: res.data,
          error: false,
          loading: false,
        });
        console.log(res.data);
      })
      .catch((err)=>{
        setState({
          data: {},
          error: true,
          loading: false,
        });
      });
  }, []);

  return (
    <Container className="bodyContainer">
      <h1>Expenses</h1>
      <CategoryBarModify/>
      <Button className="addNewButton" href='/expenses'>
        <h3>Add new Expense</h3>
      </Button>
    </Container>
  );
};

export default Expenses;