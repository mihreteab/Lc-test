import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';

import { Container, utils } from 'styled-minimal';
import Logo from 'components/Logo';

import { Navbar, Nav } from 'react-bootstrap';
import './style.css';

import Laboratory from '../Laboratory';
import AccountCreator from '../AccountCreator';

const { responsive, spacer } = utils;

const NavMenu = ['Technology', 'LC Net Lab', 'LC Net Explorer', 'Developer', 'Pricing', 'Contact'];
const NavTabs = [
  'LABORATORY',
  'ACCOUNT CREATOR',
  'ENDPOINT EXPLORER',
  'TRANSACTION BUILDER',
  'TRANSACTION SIGNER',
  'XRD VIEWER',
];

const HeaderWrapper = styled.header`
  height: 40px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;
`;

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  padding-bottom: ${spacer(2)};
  padding-top: ${spacer(2)};
`;

const Button = styled.button`
  align-items: center;
  color: #333;
  display: flex;
  font-size: 1.3rem;
  padding: ${spacer(2)};

  ${responsive({ lg: 'font-size: 1.6rem;' })}; /* stylelint-disable-line */

  color: #000;
}
      &.active {

  span {
    display: inline-block;
    margin-right: 0.4rem;
    text-transform: uppercase; 
  }
`;

const NameWrapper = styled.div`
  display: flex;
  margin: 25px;
  justify-content: space-between;
`;

const NameContainer = styled.div`
  margin: 7px;
  display: flex;
`;

const ToggleWrapper = styled.div`
  border: 1px solid #c9d6df;
  box-sizing: border-box;
  border-radius: 25px;
`;

const Title = styled.p`
  font-style: normal;
  line-height: 20px;
  font-size: 18px;
  color: #52616b;
`;

const ToggleButton = styled.button`
  font-size: 15px;
  padding: 15px;
  border-radius: 25px;
  font-weight: bolder;
`;

const Tabs = styled.div`
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  text-align: center;
  color: #fff;
  border: 1px solid transparent;
  background-color: #0084f8;
  margin-bottom: 0px !important;
  font-size: 14px;
  margin-left: 5%;
  padding-bottom: 15px;
  padding-top: 15px;
`;

export default class Header extends React.PureComponent {
  state = {
    selectedLabel: 'ACCOUNT CREATOR',
  };

  onSelectLabel = e => {
    const value = e.target.textContent;
    this.setState({ selectedLabel: value });
  };

  render() {
    const { selectedLabel } = this.state;

    return (
      <HeaderWrapper>
        <HeaderContainer>
          <div>
            <Logo />
          </div>
          <div className="d-flex">
            <Button>
              <FaFacebookF />
            </Button>

            <Button>
              <FaTwitter />
            </Button>
          </div>
        </HeaderContainer>
        <Navbar expand="lg" className="navBar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="#link"
                style={{
                  padding: '8px 20px',
                  boxShadow: '0px 1px 2px rgba(8, 35, 48, 0.24), 0px 2px 6px rgba(8, 35, 48, 0.16)',
                }}
                className="nav-link"
              >
                About
              </Nav.Link>
              {NavMenu.map(value => {
                return (
                  <Nav.Link key={value} className="nav-link">
                    {value}
                  </Nav.Link>
                );
              })}
            </Nav>

            <Nav className="ml-auto">
              <Nav.Link href="#link" className="navButton">
                Sign In
              </Nav.Link>

              <Nav.Link href="#link" className="navButton">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <NameWrapper>
          <NameContainer>
            <Title>
              <strong style={{ color: 'black', fontSize: '22px' }}>LC NET</strong> | Network
              laboratory
            </Title>
          </NameContainer>

          <ToggleWrapper>
            <ToggleButton
              style={{
                color: '#fff',
                background: '#00d67c',
              }}
            >
              TEST
            </ToggleButton>
            <ToggleButton
              style={{
                color: '#000',
              }}
            >
              PUBLIC
            </ToggleButton>
          </ToggleWrapper>
        </NameWrapper>

        <div>
          <div className="bg-tabs">
            {NavTabs.map(key => {
              return (
                <Tabs
                  className={selectedLabel === key ? 'selectedLabel' : ''}
                  key={key}
                  onClick={this.onSelectLabel}
                >
                  {key}
                </Tabs>
              );
            })}
          </div>
          {selectedLabel === 'LABORATORY' ? (
            <Laboratory />
          ) : selectedLabel === 'ACCOUNT CREATOR' ? (
            <AccountCreator />
          ) : selectedLabel === 'ENDPOINT EXPLORER' ? (
            <h1>ENDPOINT EXPLORER</h1>
          ) : selectedLabel === 'TRANSACTION BUILDER' ? (
            <h1>TRANSACTION BUILDER</h1>
          ) : selectedLabel === 'TRANSACTION SIGNER' ? (
            <h1>TRANSACTION SIGNER</h1>
          ) : selectedLabel === 'XRD VIEWER' ? (
            <h1>XRD VIEWER</h1>
          ) : (
            <h1>No Content</h1>
          )}
        </div>
      </HeaderWrapper>
    );
  }
}
