import React, { PureComponent } from 'react';

import Title from '../../../shared/Title';
import Box from '../../../shared/Box';
import InputContainerLarge from '../../../shared/InputContainerLarge';

export default class SingleTransaction extends PureComponent {
  render() {
    return (
      <div>
        <Title>SINGLE TRANSACTION</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 px-0">
              <h2 className="font-weight-bold">TRANSACTION HASH</h2>
            </div>
            <InputContainerLarge
              className="col-lg-8 col-md-8 col-sm-12"
              value="Example: 1714814"
            />
          </div>

          <div className="row mt-5">
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0">
              Server-Sent Events (streaming) mode
            </p>
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0">
              {'https://horizon-testnet.stellar.org/transaction/{transaction}'}
            </p>
          </div>
        </Box>
      </div>
    );
  }
}
