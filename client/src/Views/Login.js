import React from 'react';
import { Container, Card, Form, FormGroup, Button, Row } from 'react-bootstrap'

import '../Styles/Login.css';

const Login = () => {
  return (
    <Container className="loginContainer">
      <Card  className="loginCard">
        <Form className="loginForm">
          <h3>Log in</h3>
          <FormGroup>
            <Row style={{margin: "0"}}>
              <label>Email Address</label>
            </Row>
            <Row style={{margin: "0"}}>
              <input type="text" className="authInput"></input>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row style={{margin: "0"}}>
              <label>Password</label>
            </Row>
            <Row style={{margin: "0"}}>
              <input type="password" className="authInput"></input>
            </Row>
          </FormGroup>
          <FormGroup className="checkInput">
            <input type="checkbox" ></input>
            <label>Remember me</label>
          </FormGroup>
          <Button type="submit" className="authButton">Login</Button>
          <p className="subtext">
            Don't have an account?
            <p>
              <a href="/signup"> Click here to sign up!</a>
            </p>
          </p>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;