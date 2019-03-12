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
        <Navbar
          expand="lg"
          style={{
            backgroundColor: '#FFF !important',
            boxShadow: '0 2px 2px 0 rgba(0,0,0,0.2)',
            height: '50px',
            padding: '35px 20px',
          }}
        >
          <Navbar.Brand href="#home" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="#link"
                style={{
                  padding: '8px 20px',
                  color: '#000000',
                  marginRight: '15px',
                  boxShadow: '0px 1px 2px rgba(8, 35, 48, 0.24), 0px 2px 6px rgba(8, 35, 48, 0.16)',
                  borderRadius: '6px',
                }}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{
                  color: '#000000',
                  marginRight: '15px',
                  borderRadius: '6px',
                }}
              >
                Technology
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{
                  color: '#000000',
                  marginRight: '15px',
                  borderRadius: '6px',
                }}
              >
                LC Net Lab
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{
                  color: '#000000',
                  marginRight: '15px',
                  borderRadius: '6px',
                }}
              >
                LC Net Explorer
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{
                  color: '#000000',
                  marginRight: '15px',
                  borderRadius: '6px',
                }}
              >
                Developer
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{
                  color: '#000000',
                  marginRight: '15px',
                  borderRadius: '6px',
                }}
              >
                Pricing
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{
                  color: '#000000',
                  marginRight: '15px',
                  borderRadius: '6px',
                }}
              >
                Contact
              </Nav.Link>
            </Nav>

            <Nav className="ml-auto">
              <Nav.Link
                href="#link"
                style={{
                  marginRight: '10px',
                  color: '#000000',
                  border: '1px solid',
                  borderRadius: '6px',
                }}
              >
                Sign In
              </Nav.Link>

              <Nav.Link
                href="#link"
                style={{
                  color: '#000000',
                  marginRight: '10px',
                  border: '1px solid',
                  borderRadius: '6px',
                }}
              >
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* --------------------Toggle Component--------------------------- */}

        <div
          className="d-flex"
          style={{
            margin: '25px',
            justifyContent: 'space-between',
            // marginLeft: '30px',
          }}
        >
          <div
            className="d-flex"
            style={{
              margin: '7px',
            }}
          >
            <p
              style={{
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '22px',
                fontSize: '18px',
              }}
            >
              LC NET |
            </p>
            <span
              style={{
                color: 'black',
                fontWeight: '600',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '22px',
              }}
            >
              Network laboratory
            </span>
          </div>

          <div
            style={{
              border: '1px solid #C9D6DF',
              boxSizing: 'border-box',
              borderRadius: '25px',
            }}
          >
            <button
              style={{
                fontSize: '15px',
                padding: '15px',
                color: '#fff',
                background: '#00D67C',
                borderRadius: '25px',
                fontWeight: '600',
              }}
            >
              TEST
            </button>
            <button
              style={{
                fontSize: '15px',
                padding: '15px',
                color: '#fff',
                background: '#00D67C',
                borderRadius: '25px',
                fontWeight: '600',
              }}
            >
              PUBLIC
            </button>
          </div>
        </div>

        <div className="bg-tabs">
          <input id="tab1" type="radio" name="tabs" onChange={this.asdf} value={'ads'} />
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
