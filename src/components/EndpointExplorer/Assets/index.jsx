import React, { PureComponent } from 'react';

import Wrapper from '../../shared/Wrapper';
import Title from '../../shared/Title';
import InputContainer from '../../shared/InputContainer';
import Box from '../../shared/Box';
import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';

export default class Assets extends PureComponent {
  render() {
    return (
      <Wrapper className="col-lg-9 col-md-7 col-sm-12 col-xs-12">
        <Title>
          SELECT A ENDPOINT
          <InputContainer value="Single Account" />
        </Title>
        <Title>ALL ASSETS</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 px-0">
              <h2 className="font-weight-bold">ACCOUNT ID</h2>
              <span>(Optional)</span>
            </div>
            <InputContainerLarge
              className="col-lg-8 col-md-8 col-sm-12"
              value=""
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 px-0">
              <h2 className="font-weight-bold">ASSET ISSUER</h2>
              <span>(Optional)</span>
            </div>
            <InputContainerLarge
              className="col-lg-8 col-md-8 col-sm-12"
              value="
            Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 px-0">
              <h2 className="font-weight-bold">CURSOR</h2>
              <span>(Optional)</span>
            </div>
            <InputContainerLarge
              className="col-lg-8 col-md-8 col-sm-12"
              value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 px-0">
              <h2 className="font-weight-bold">LIMIT</h2>
            </div>
            <InputContainerLarge
              className="col-lg-8 col-md-8 col-sm-12"
              value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 px-0">
              <h2 className="font-weight-bold">ORDER</h2>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 mt-2 px-0">
              <Span>asc</Span>
              <Span>desc</Span>
            </div>
          </div>

          <div className="row mt-5">
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0">
              Server-Sent Events (streaming) mode
            </p>
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0">
              https://horizon-testnet.stellar.org/assets
            </p>
          </div>
        </Box>
      </Wrapper>
    );
  }
}
