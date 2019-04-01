import React, { PureComponent } from 'react';

import Title from '../../shared/Title';
import InputContainer from '../../shared/InputContainerLarge';
import InputContainerDefault from '../../shared/InputContainer';

import Box from '../../shared/Box';
import Wrapper from '../../shared/Wrapper';

export default class Accounts extends PureComponent {
  state = {};

  render() {
    return (
      <Wrapper className="col-lg-9 col-md-7 col-sm-12 col-xs-12">
        <Title>
          SELECT A ENDPOINT
          <InputContainerDefault value="Single Account" />
        </Title>
        <Title>SINGLE ACCOUNT</Title>
        <Box>
          <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2 className="m-3 font-weight-bold px-0">ACCOUNT ID</h2>
            <InputContainer
              value="
            Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>
          <p className="m-2 mt-5">Server-Sent Events (streaming) mode</p>
          <p className="m-2 mt-5">
            {'https://horizon-testnet.stellar.org/accounts/{account_id}'}
          </p>
        </Box>
      </Wrapper>
    );
  }
}
