import React, { PureComponent } from 'react';

import Title from '../../../shared/Title';
import InputContainerLarge from '../../../shared/InputContainerLarge';
import InputContainerDefault from '../../../shared/InputContainer';

import Box from '../../../shared/Box';
import Wrapper from '../../../shared/Wrapper';
import FormTitle from '../../../shared/FormTitle';
import FormSubTitle from '../../../shared/FormSubTitle';
import Info from '../../../shared/Info';

export default class Accounts extends PureComponent {
  state = {};

  render() {
    return (
      <Wrapper className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
        <Title>
          SELECT A ENDPOINT
          <InputContainerDefault value="Single Account" />
        </Title>
        <Title>SINGLE ACCOUNT</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 px-0">
              <FormTitle>ACCOUNT ID</FormTitle>
              <FormSubTitle>(Optional)</FormSubTitle>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-8 col-sm-12"
              value="
            Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <Info>Server-Sent Events (streaming) mode</Info>
            <Info>
              {'https://horizon-testnet.stellar.org/accounts/{account_id}'}
            </Info>
          </div>
        </Box>
      </Wrapper>
    );
  }
}
