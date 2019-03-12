import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';

import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import { Container, utils } from 'styled-minimal';
import Logo from 'components/Logo';

import { Navbar, Nav, Tab } from 'react-bootstrap';
import './style.css';

const { responsive, spacer } = utils;

const NavMenu = ['Technology', 'LC Net Lab', 'LC Net Explorer', 'Developer', 'Pricing', 'Contact'];

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

export default class Header extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
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
        <Navbar expand="lg" className={'navBar'}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="#link"
                style={{
                  padding: '8px 20px',
                  boxShadow: '0px 1px 2px rgba(8, 35, 48, 0.24), 0px 2px 6px rgba(8, 35, 48, 0.16)',
                }}
                className={'nav-link'}
              >
                About
              </Nav.Link>
              {NavMenu.map(value => {
                return (
                  <Nav.Link key={value} className={'nav-link'}>
                    {value}
                  </Nav.Link>
                );
              })}
            </Nav>

            <Nav className="ml-auto">
              <Nav.Link href="#link" className={'navButton'}>
                Sign In
              </Nav.Link>

              <Nav.Link href="#link" className={'navButton'}>
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

        <div className="bg-tabs">
          <input id="tab1" type="radio" name="tabs" onChange={this.asdf} value="ads" checked />
          <label htmlFor="tab1">LABORATORY</label>

          <input id="tab2" type="radio" name="tabs" onChange={this.asdf} />
          <label htmlFor="tab2">ACCOUNT CREATOR</label>

          <input id="tab3" type="radio" name="tabs" onChange={this.asdf} />
          <label htmlFor="tab3">ENDPINT EXPLORER</label>

          <input id="tab4" type="radio" name="tabs" onChange={this.asdf} />
          <label htmlFor="tab4">TRANSACTION BUILDER</label>

          <input id="tab5" type="radio" name="tabs" onChange={this.asdf} />
          <label htmlFor="tab5">TRANSACTION SIGNER</label>

          <input id="tab6" type="radio" name="tabs" onChange={this.asdf} />
          <label htmlFor="tab6">XRD VIEWER</label>

          <section id="content1">
            <p>
              Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank pig ribeye
              leberkas filet mignon brisket beef kevin tenderloin porchetta. Capicola fatback
              venison shank kielbasa, drumstick ribeye landjaeger beef kevin tail meatball pastrami
              prosciutto pancetta. Tail kevin spare ribs ground round ham ham hock brisket shoulder.
              Corned beef tri-tip leberkas flank sausage ham hock filet mignon beef ribs pancetta
              turkey.
            </p>
            <p>
              Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin.
            </p>
          </section>
          <section id="content2">
            <p>
              Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin.
            </p>
            <p>
              Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank pig ribeye
              leberkas filet mignon brisket beef kevin tenderloin porchetta. Capicola fatback
              venison shank kielbasa, drumstick ribeye landjaeger beef kevin tail meatball pastrami
              prosciutto pancetta. Tail kevin spare ribs ground round ham ham hock brisket shoulder.
              Corned beef tri-tip leberkas flank sausage ham hock filet mignon beef ribs pancetta
              turkey.
            </p>
          </section>
          <section id="content3">
            <p>
              Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank pig ribeye
              leberkas filet mignon brisket beef kevin tenderloin porchetta. Capicola fatback
              venison shank kielbasa, drumstick ribeye landjaeger beef kevin tail meatball pastrami
              prosciutto pancetta. Tail kevin spare ribs ground round ham ham hock brisket shoulder.
              Corned beef tri-tip leberkas flank sausage ham hock filet mignon beef ribs pancetta
              turkey.
            </p>
            <p>
              Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin.
            </p>
          </section>
          <section id="content4">
            <p>
              Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin.
            </p>
            <p>
              Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank pig ribeye
              leberkas filet mignon brisket beef kevin tenderloin porchetta. Capicola fatback
              venison shank kielbasa, drumstick ribeye landjaeger beef kevin tail meatball pastrami
              prosciutto pancetta. Tail kevin spare ribs ground round ham ham hock brisket shoulder.
              Corned beef tri-tip leberkas flank sausage ham hock filet mignon beef ribs pancetta
              turkey.
            </p>
          </section>
          <section id="content5">
            <p>
              Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin.
            </p>
            <p>
              Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank pig ribeye
              leberkas filet mignon brisket beef kevin tenderloin porchetta. Capicola fatback
              venison shank kielbasa, drumstick ribeye landjaeger beef kevin tail meatball pastrami
              prosciutto pancetta. Tail kevin spare ribs ground round ham ham hock brisket shoulder.
              Corned beef tri-tip leberkas flank sausage ham hock filet mignon beef ribs pancetta
              turkey.
            </p>
          </section>
          <section id="content6">
            <p>
              Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin.
            </p>
            <p>
              Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank pig ribeye
              leberkas filet mignon brisket beef kevin tenderloin porchetta. Capicola fatback
              venison shank kielbasa, drumstick ribeye landjaeger beef kevin tail meatball pastrami
              prosciutto pancetta. Tail kevin spare ribs ground round ham ham hock brisket shoulder.
              Corned beef tri-tip leberkas flank sausage ham hock filet mignon beef ribs pancetta
              turkey.
            </p>
          </section>
        </div>
      </HeaderWrapper>
    );
  }
}
