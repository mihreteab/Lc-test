import React, { PureComponent } from 'react';

import Title from '../../shared/Title';
import Box from '../../shared/Box';
import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../Span';

export default class SingleLedger extends PureComponent {
  render() {
    return (
      <div>
        <Title>SINGLE LEDGER</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div>
                <h2 className="font-weight-bold">LEDGER SEQUENCE</h2>
              </div>
            </div>
            <InputContainerLarge className="col-md-8 col-sm-12" value="" />
          </div>

          <p className="m-2 mt-5">Server-Sent Events (streaming) mode</p>
          <p className="m-2 mt-5">https://horizon-testnet.stellar.org/assets</p>
        </Box>
      </div>
    );
  }
}
