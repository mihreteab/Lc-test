import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

// import { utils } from 'styled-minimal';
import Logo from 'components/Logo';
import Navbar from './Navbar';
import NavLink from './NavLink';

import HeaderWrapper from './HeaderWrapper';
import HeaderContainer from './HeaderContainer';
import Button from './Button';

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

export default class Header extends Component {
  state = {};

  render() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <div>
            <Logo />
          </div>
          <div className="d-flex">
            <IconContext.Provider value={{ color: '#78909C', size: '2rem' }}>
              <Button>
                <FaFacebookF />
              </Button>

              <Button>
                <FaTwitter />
              </Button>
            </IconContext.Provider>
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
                <NavLink key={value.to} to={`${value.to}`}>
                  {value.value}
                </NavLink>
              ))}
            </ul>

            <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
              <NavLink border={true}>Sign Up</NavLink>
              <NavLink border={true}>Sign In</NavLink>
            </ul>
          </div>
        </Navbar>
      </HeaderWrapper>
    );
  }
}
