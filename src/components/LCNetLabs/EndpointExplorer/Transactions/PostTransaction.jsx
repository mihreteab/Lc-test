import React, { PureComponent } from 'react';

import Title from '../../../shared/Title';
import Box from '../../../shared/Box';
import InputContainerLarge from '../../../shared/InputContainerLarge';
import FormTitle from '../../../shared/FormTitle';
import FormSubTitle from '../../../shared/FormSubTitle';
import Info from '../../../shared/Info';

export default class OperationsForTransactions extends PureComponent {
  render() {
    return (
      <div>
        <Title>POST TRANSACTION</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
              <FormTitle>
                TRANSACTION ENVELOPE <br /> XDR
              </FormTitle>
            </div>
            <InputContainerLarge
              wrap="soft"
              rows="14"
              cols="10"
              height="150px"
              className="col-lg-9 col-md-9 col-sm-12"
            />
          </div>

          <div className="row mt-5">
            <Info>https://horizon-testnet.stellar.org/transactions</Info>
          </div>
        </Box>
      </div>
    );
  }
}
