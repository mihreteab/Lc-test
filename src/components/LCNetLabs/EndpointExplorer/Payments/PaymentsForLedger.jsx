import React, { PureComponent } from 'react';

import Title from '../../../shared/Title';
import Box from '../../../shared/Box';
import InputContainerLarge from '../../../shared/InputContainerLarge';
import Span from '../../../shared/Span';
import FormTitle from '../../../shared/FormTitle';
import FormSubTitle from '../../../shared/FormSubTitle';
import Info from '../../../shared/Info';

export default class PaymentsForLedger extends PureComponent {
  render() {
    return (
      <div>
        <Title>PAYMENTS FOR LEDGER</Title>
        <Box padding="40px">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
              <FormTitle>LEDGER SEQUENCE</FormTitle>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-9 col-sm-12"
              value=""
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
              <FormTitle>CURSOR</FormTitle>
              <FormSubTitle>(Optional)</FormSubTitle>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-9 col-sm-12"
              value=""
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
              <FormTitle>LIMIT</FormTitle>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-9 col-sm-12"
              value=""
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
              <FormTitle>ORDER</FormTitle>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 mt-2 px-0">
              <Span>asc</Span>
              <Span>desc</Span>
            </div>
          </div>

          <div className="row mt-5">
            <Info>Server-Sent Events (streaming) mode</Info>
            <Info>
              {'https://horizon-testnet.stellar.org/ledgers/{ledger}/payments'}
            </Info>
          </div>
        </Box>
      </div>
    );
  }
}
