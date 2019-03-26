import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';

// import { utils } from 'styled-minimal';
import Logo from 'components/Logo';

import HeaderWrapper from './HeaderWrapper';
import HeaderContainer from './HeaderContainer';
import Button from './Button';

import NameWrapper from './NameWrapper';
import NameContainer from './NameContainer';
import ToggleWrapper from './ToggleWrapper';
import ToggleButton from './ToggleButton';
import Title from './Title';
import Tabs from './Tabs';
import Navbar from './Navbar';
import NavLink from './NavLink';
// import NavbarToggler from './NavbarToggler';
import ActiveNavLink from './ActiveNavLink';
import TitleStrongText from './TitleStrongText';
import NavWrapper from './NavWrapper';

const NavMenu = [
  'Technology',
  'LC Net Lab',
  'LC Net Explorer',
  'Developer',
  'Pricing',
  'Contact',
];

const NavTabs = [
  'LABORATORY',
  'ACCOUNT CREATOR',
  'ENDPOINT EXPLORER',
  'TRANSACTION BUILDER',
  'TRANSACTION SIGNER',
  'XRD VIEWER',
];

export default class Header extends React.PureComponent {
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

          <div className="collapse navbar-collapse" id="headerNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <ActiveNavLink>About</ActiveNavLink>
              </li>

              {NavMenu.map(value => (
                <li className="nav-item" key={value}>
                  <NavLink key={value}>{value}</NavLink>
                </li>
              ))}
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink border="border border-dark">Sign In</NavLink>
              </li>
              <li className="nav-item">
                <NavLink border="border border-dark">Sign Up</NavLink>
              </li>
            </ul>
          </div>
        </Navbar>

        <NameWrapper>
          <NameContainer>
            <Title>
              <TitleStrongText>LC NET</TitleStrongText> | Network laboratory
            </Title>
          </NameContainer>

          <ToggleWrapper>
            <ToggleButton active={active}>TEST</ToggleButton>
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
          <NavWrapper>
            {NavTabs.map(key => {
              const link = key
                .toLowerCase()
                .split(' ')
                .join('-');

              return (
                <Link to={link} key={key} className="submenu menu activeClass">
                  <Tabs
                    isSelect={selectedLabel === key ? true : false}
                    key={key}
                    onClick={this.onSelectLabel}
                  >
                    {key}
                  </Tabs>
                </Link>
              );
            })}
          </NavWrapper>
        </div>
      </HeaderWrapper>
    );
  }
}
