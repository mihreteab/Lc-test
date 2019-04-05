import React, { PureComponent } from 'react';

import Title from '../../../shared/Title';
import Box from '../../../shared/Box';
import InputContainerLarge from '../../../shared/InputContainerLarge';
import FormTitle from '../../../shared/FormTitle';
import FormSubTitle from '../../../shared/FormSubTitle';
import Info from '../../../shared/Info';

export default class SingleTransaction extends PureComponent {
  render() {
    return (
      <div>
        <Title>SINGLE TRANSACTION</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
              <FormTitle>TRANSACTION HASH</FormTitle>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-9 col-sm-12"
              value="Example: 1714814"
            />
          </div>

          <div className="row mt-5">
            <Info>Server-Sent Events (streaming) mode</Info>
            <Info>
              {'https://horizon-testnet.stellar.org/transaction/{transaction}'}
            </Info>
          </div>
        </Box>
      </div>
    );
  }
}
