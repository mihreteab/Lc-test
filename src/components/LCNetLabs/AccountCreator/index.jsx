import React, { PureComponent } from 'react';

import Wrapper from './Wrapper';
import Button from './Button';
import InputContainerLarge from '../../shared/InputContainerLarge';
import Title from './Title';

export default class AccountCreator extends PureComponent {
  state = {};

  render() {
    return (
      <Wrapper>
        <Wrapper>
          <Title>1. KEYPAIR GENERATOR</Title>
          <p
            style={{
              color: '#52616B',
            }}
          >
            These keypairs can be used on the LC Net network where one is
            required. For example, it can be used as an account master key,
            account signer, and/or <br /> as a stellar-core node key.{' '}
          </p>
          <Button>Generate keypair</Button>
        </Wrapper>

        <Wrapper>
          <Title>2. FRIEND BOT: FUND A TEST NETWORK ACCOUNT</Title>
          <p
            style={{
              color: '#52616B',
            }}
          >
            These keypairs can be used on the LC Net network where one is
            required. For example, it can be used as an account master key,
            account signer, and/or
            <br /> as a stellar-core node key.
          </p>
          <div className="d-flex flex-column">
            <InputContainerLarge
              value="Example:
              GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
            <Button testNetwork={true}>Get Test Network Lumens</Button>
          </div>
        </Wrapper>
      </Wrapper>
    );
  }
}
