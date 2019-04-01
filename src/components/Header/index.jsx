import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link, NavLink as Navlinks } from 'react-router-dom';

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
    to: '/laboratory',
    value: 'LC Net Lab',
  },
  {
    to: '/explorer',
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
  };

  onSelectLabel = e => {
    const value = e.target.textContent;
    this.setState({ selectedLabel: value });
  };

  render() {
    const { selectedLabel, active } = this.state;

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

          <div className="navbar-collapse" id="headerNavbar">
            <ul
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '1px',
              }}
              className="navbar-nav mr-auto"
            >
              {NavMenu.map(value => (
                <Navlinks
                  key={value}
                  to={`${value.to}`}
                  className="active"
                  activeStyle={{
                    padding: '8px 20px',
                    boxShadow:
                      '0px 1px 2px rgba(8, 35, 48, 0.24), 0px 2px 6px rgba(8, 35, 48, 0.16)',
                    borderRadius: '3px',
                  }}
                >
                  {value.value}
                </Navlinks>
              ))}
            </ul>

            <ul
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="navbar-nav ml-auto"
            >
              <SigninWrapper>
                <li className="nav-item">
                  <NavLink border="border border-dark">Sign In</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink border="border border-dark">Sign Up</NavLink>
                </li>
              </SigninWrapper>
            </ul>
          </div>
        </Navbar>
      </HeaderWrapper>
    );
  }
}
