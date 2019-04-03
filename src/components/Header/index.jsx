import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { NavLink as Navlinks } from 'react-router-dom';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';

// import { utils } from 'styled-minimal';
import Logo from 'components/Logo';
import Navbar from './Navbar';
import NavLink from './NavLink';

import HeaderWrapper from './HeaderWrapper';
import HeaderContainer from './HeaderContainer';
import Button from './Button';

import SigninWrapper from './SignInWrapper';

const NavMenu = [
  {
    to: '/about',
    value: 'About',
  },
  {
    to: '/technology',
    value: 'Technology',
  },
  {
    to: '/lc-net-lab',
    value: 'LC Net Lab',
  },
  {
    to: '/lc-net-explorer',
    value: 'LC Net Explorer',
  },
  {
    to: '/developer',
    value: 'Developer',
  },
  {
    to: '/pricing',
    value: 'Pricing',
  },
  {
    to: '/contact',
    value: 'Contact',
  },
];

const NavTabs = [
  'LABORATORY',
  'ACCOUNT CREATOR',
  'ENDPOINT EXPLORER',
  'TRANSACTION BUILDER',
  'TRANSACTION SIGNER',
  'XRD VIEWER',
];

export default class Header extends PureComponent {
  state = {
    selectedLabel: 'LABORATORY',
    active: true,
    activeLink: 'about',
  };

  onSelectLabel = e => {
    const value = e.target.textContent;
    this.setState({ selectedLabel: value });
  };

  render() {
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
        <Navbar>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#headerNavbar"
            aria-controls="headerNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="headerNavbar">
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              {NavMenu.map(value => (
                <NavLink key={value.to} to={value.to}>
                  {value.value}
                </NavLink>
              ))}
            </ul>
            {/* <ul className="navbar-nav mr-auto d-flex justify-content-center align-items-center">
              {NavMenu.map(value => (
                <Navlinks
                  key={value.to}
                  to={`${value.to}`}
                  activeStyle={{
                    padding: '8px 20px',
                    boxShadow:
                      '0px 1px 2px rgba(8, 35, 48, 0.24), 0px 2px 6px rgba(8, 35, 48, 0.16)',
                    borderRadius: '3px',
                  }}
                  style={{
                    color: '#000000',
                    marginRight: '15px',
                    borderRadius: '6px',
                    padding: '10px',
                    fontSize: '16px',
                  }}
                >
                  {value.value}
                </Navlinks>
              ))} 
            </ul> */}

            <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
              <NavLink border={true}>Sign In</NavLink>
              <NavLink border={true}>Sign Up</NavLink>
            </ul>
          </div>
        </Navbar>
      </HeaderWrapper>
    );
  }
}
