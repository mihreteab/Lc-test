import React, { PureComponent } from 'react';

import Wrapper from './Wrapper';
import Button from './Button';
import InputContainer from './InputContainer';

export default class AccountCreator extends PureComponent {
  state = {};

  render() {
    return (
      <Wrapper>
        <Wrapper>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            1. KEYPAIR GENERATOR
          </p>
          <p
            style={{
              color: '#52616B',
            }}
          >
            These keypairs can be used on the LC Net network where one is required. For example, it
            can be used as an account master key, account signer, and/or <br /> as a stellar-core
            node key.{' '}
          </p>
          <Button>Generate keypair</Button>
        </Wrapper>

        <Wrapper>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            2. FRIEND BOT: FUND A TEST NETWORK ACCOUNT
          </p>
          <p
            style={{
              color: '#52616B',
            }}
          >
            These keypairs can be used on the LC Net network where one is required. For example, it
            can be used as an account master key, account signer, and/or
            <br /> as a stellar-core node key.{' '}
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <InputContainer
              value="Example:
              GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
            <Button
              style={{
                background: '#C9D6DF',
                marginTop: '15px',
                width: '250px',
              }}
            >
              Get Test Network Lumens
            </Button>
          </div>
        </Wrapper>
      </Wrapper>
    );
  }
}
