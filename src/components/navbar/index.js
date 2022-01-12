import React from 'react'
import {
    Container, 
    Login, 
    LogoContainer, 
    Wrapper
  }from './styleNavbar';
import logo from '../../images/logo.svg'

const index = () => {
    return (
        <Container>
          <Wrapper> 
              <LogoContainer src={logo} alt=''/>
              <Login>
                login
              </Login>
          </Wrapper>
        </Container>
    );
}

export default index
