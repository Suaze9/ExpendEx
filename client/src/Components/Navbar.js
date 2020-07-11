import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar as NV, Nav } from 'react-bootstrap';

import '../Styles/NavBar.css';

const NavBar = (props) => {

  const {children} = props;

  return (
    <div className="navContainer">
      <NV collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="navBar">
        <NV.Brand href="/">ExpenDex</NV.Brand>
        <NV.Toggle aria-controls="responsive-navbar-nav" />
        <NV.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/stats">Stats</Nav.Link>    
          </Nav>
          <Nav>
            <Nav.Link href="/logout">Log-out</Nav.Link>
          </Nav>
        </NV.Collapse>
      </NV>
      <div className="childContent">{children}</div>
    </div>
  );
};

export default withRouter(NavBar);
