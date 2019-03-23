import React, { PureComponent } from 'react';

import Title from '../../shared/Title';
import Box from '../../shared/Box';
import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';

export default class OperationsForTransactions extends PureComponent {
  render() {
    return (
      <div>
        <Title>POST TRANSACTION</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div>
                <h2 className="font-weight-bold">
                  TRANSACTION ENVELOPE <br /> XDR
                </h2>
              </div>
            </div>
            <InputContainerLarge
              wrap="soft"
              rows="14"
              cols="10"
              height="150px"
              className="col-md-8 col-sm-12"
            />
          </div>

          <p className="m-2 mt-5">
            {'https://horizon-testnet.stellar.org/transactions'}
          </p>
        </Box>
      </div>
    );
  }
}
