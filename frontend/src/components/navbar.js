import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const NavbarExample = (props) => {

  return (
    <div>
      <Navbar color="primary" light expand="md">
        <h3 style={{color:'white'}}>Memos</h3>
      </Navbar>
    </div>
  );
}

export default NavbarExample;
