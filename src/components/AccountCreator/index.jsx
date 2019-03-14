import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px;
`;

const ContentWrapper = styled.div`
  margin: 20px;
`;

const Button = styled.button`
  background: #0084f8;
  border-radius: 4px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

const InputContainer = styled.input`
  padding: 10px;
  font-size: 16px;
  color: #c9d6df;
  paddingleft: 10px;
  border: none;
  background: #f0f5f9;
  width: 690px;
`;

export default class AccountCreator extends PureComponent {
  state = {};

  render() {
    return (
      <Wrapper>
        <ContentWrapper>
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
        </ContentWrapper>

        <ContentWrapper>
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
        </ContentWrapper>
      </Wrapper>
    );
  }
}
