import React, { PureComponent } from 'react';

import Title from '../../shared/Title';
import Box from '../../shared/Box';
import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';

export default class AllEffects extends PureComponent {
  render() {
    return (
      <div>
        <Title>ALL EFFECTS</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div>
                <h2 className="font-weight-bold">CURSOR</h2>
                <span>(Optional)</span>
              </div>
            </div>
            <InputContainerLarge className="col-md-8 col-sm-12" value="" />
          </div>

          <div className="row mt-5">
            <div className="col-md-4 col-sm-12">
              <h2 className="mt-2 font-weight-bold">LIMIT</h2>
            </div>
            <InputContainerLarge
              className="col-md-8 col-sm-12"
              value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="mt-5">
            <div className="mr-5">
              <div className="row">
                <h2 className="col-md-4 font-weight-bold">ORDER</h2>
                <div className="p-3 col-md-8">
                  <Span>asc</Span>
                  <Span>desc</Span>
                </div>
              </div>
            </div>
          </div>
          <p className="m-2 mt-5">Server-Sent Events (streaming) mode</p>
          <p className="m-2 mt-5">https://horizon-testnet.stellar.org/assets</p>
        </Box>
      </div>
    );
  }
}
