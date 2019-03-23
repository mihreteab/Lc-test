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
      <Wrapper>
        <Title>
          SELECT A ENDPOINT
          <InputContainer />
        </Title>
        <Title>ALL ASSETS</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h2 className="font-weight-bold">ACCOUNT ID</h2>
              <span>(Optional)</span>
            </div>
            <InputContainerLarge className="col-md-8 col-sm-12" value="" />
          </div>

          <div className="row mt-5">
            <div className="col-md-4 col-sm-12">
              <h2 className="font-weight-bold">ASSET ISSUER</h2>
              <span>(Optional)</span>
            </div>
            <InputContainerLarge
              className="col-md-8 col-sm-12"
              value="
            Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <div className="col-md-4 col-sm-12">
              <h2 className="font-weight-bold">CURSOR</h2>
              <span>(Optional)</span>
            </div>
            <InputContainerLarge
              className="col-md-8 col-sm-12"
              value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <div className="col-md-4 col-sm-12">
              <h2 className="m-3 font-weight-bold">LIMIT</h2>
            </div>
            <InputContainerLarge
              className="col-md-8 col-sm-12"
              value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <div className="col-md-4 col-sm-12">
              <h2 className="m-3 font-weight-bold">ORDER</h2>
            </div>
            <div className="col-md-8 mt-2">
              <Span>asc</Span>
              <Span>desc</Span>
            </div>
          </div>

          <p className="m-2 mt-5">Server-Sent Events (streaming) mode</p>
          <p className="m-2 mt-5">https://horizon-testnet.stellar.org/assets</p>
        </Box>
      </Wrapper>
    );
  }
}
