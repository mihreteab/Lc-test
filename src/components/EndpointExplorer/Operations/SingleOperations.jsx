import React, { PureComponent } from 'react';

import Title from '../../shared/Title';
import Box from '../../shared/Box';
import InputContainerLarge from '../../shared/InputContainerLarge';

export default class SingleOperations extends PureComponent {
  render() {
    return (
      <div>
        <Title>SINGLE OPERATIONS</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h2 className="mt-2 font-weight-bold">OPERATION ID</h2>
            </div>
            <InputContainerLarge
              className="col-lg-8 col-md-8 col-sm-12"
              value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>

          <div className="row mt-5">
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              Server-Sent Events (streaming) mode
            </p>
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {'https://horizon-testnet.stellar.org/operations/{operation}'}
            </p>
          </div>
        </Box>
      </div>
    );
  }
}
