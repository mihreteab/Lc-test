import React, { PureComponent } from 'react';

import Title from '../../shared/Title';
import Box from '../../shared/Box';
import InputContainerLarge from '../../shared/InputContainerLarge';

export default class SingleTransaction extends PureComponent {
  render() {
    return (
      <div>
        <Title>SINGLE TRANSACTION</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div>
                <h2 className="font-weight-bold">TRANSACTION HASH</h2>
              </div>
            </div>
            <InputContainerLarge
              className="col-md-8 col-sm-12"
              value="Example: 1714814"
            />
          </div>

          <p className="m-2 mt-5">Server-Sent Events (streaming) mode</p>
          <p className="m-2 mt-5">
            {'https://horizon-testnet.stellar.org/transaction/{transaction}'}
          </p>
        </Box>
      </div>
    );
  }
}
