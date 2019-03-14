import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';

// import { utils } from 'styled-minimal';
import Logo from 'components/Logo';

import HeaderWrapper from './HeaderWrapper';
import HeaderContainer from './HeaderContainer';
import Button from './Button';

import './style.css';

import Laboratory from '../Laboratory';
import AccountCreator from '../AccountCreator';
import EndpointExplorer from '../EndpointExplorer';
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

const NavMenu = ['Technology', 'LC Net Lab', 'LC Net Explorer', 'Developer', 'Pricing', 'Contact'];

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
    selectedLabel: 'ENDPOINT EXPLORER',
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

              {NavMenu.map(value => {
                return (
                  <li className="nav-item" key={value}>
                    <NavLink key={value}>{value}</NavLink>
                  </li>
                );
              })}
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
            <ToggleButton active="activeToggle">TEST</ToggleButton>
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
            <EndpointExplorer />
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
