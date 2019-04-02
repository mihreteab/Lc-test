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
            <div className="col-lg-4 col-md-4 col-sm-12 px-0">
              <h2 className="font-weight-bold">
                TRANSACTION ENVELOPE <br /> XDR
              </h2>
            </div>
            <InputContainerLarge
              wrap="soft"
              rows="14"
              cols="10"
              height="150px"
              className="col-lg-8 col-md-8 col-sm-12"
            />
          </div>

          <div className="row mt-5">
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0">
              {'https://horizon-testnet.stellar.org/transactions'}
            </p>
          </div>
        </Box>
      </div>
    );
  }
}
