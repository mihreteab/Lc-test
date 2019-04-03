import React, { PureComponent } from 'react';

import Title from '../../../shared/Title';
import Box from '../../../shared/Box';
import InputContainerLarge from '../../../shared/InputContainerLarge';

export default class SingleLedger extends PureComponent {
  render() {
    return (
      <div>
        <Title>SINGLE LEDGER</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h2 className="font-weight-bold">LEDGER SEQUENCE</h2>
            </div>
            <InputContainerLarge
              className="col-lg-8 col-md-8 col-sm-12"
              value=""
            />
          </div>

          <div className="row mt-5">
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              Server-Sent Events (streaming) mode
            </p>
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {'https://horizon-testnet.stellar.org/ledgers/{ledgers}'}
            </p>
          </div>
        </Box>
      </div>
    );
  }
}
