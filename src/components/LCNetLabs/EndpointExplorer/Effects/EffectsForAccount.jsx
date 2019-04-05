import React, { PureComponent } from 'react';

import Title from '../../../shared/Title';
import Box from '../../../shared/Box';
import InputContainerLarge from '../../../shared/InputContainerLarge';
import Span from '../../../shared/Span';
import FormTitle from '../../../shared/FormTitle';
import Info from '../../../shared/Info';

export default class EffectsForAccounts extends PureComponent {
  render() {
    return (
      <div>
        <Title>EFFECTS FOR ACCOUNT</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <FormTitle>ACCOUNT ID</FormTitle>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-9 col-sm-12"
              value=""
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <FormTitle>CURSOR</FormTitle>
              <span>(Optional)</span>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-9 col-sm-12"
              value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <FormTitle>LIMIT</FormTitle>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-9 col-sm-12"
              value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <FormTitle>ORDER</FormTitle>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 mt-2 px-0">
              <Span>asc</Span>
              <Span>desc</Span>
            </div>
          </div>

          <div className="row mt-5 pl-3">
            <Info>Server-Sent Events (streaming) mode</Info>
            <Info>https://horizon-testnet.stellar.org/assets</Info>
          </div>
        </Box>
      </div>
    );
  }
}
