import React, { PureComponent } from 'react';

import Box from '../../../shared/Box';
import InputContainerLarge from '../../../shared/InputContainerLarge';
import Span from '../../../shared/Span';
import FormTitle from '../../../shared/FormTitle';
import FormSubTitle from '../../../shared/FormSubTitle';
import Info from '../../../shared/Info';

const Assets = ['Native', 'Alphanumeric 4', 'Alphanumeric 12'];

export default class FindPaymentPaths extends PureComponent {
  state = {
    selectedSpan: 'Native',
    isVisible: false,
  };

  onClickSpan = e => {
    const value = e.target.innerText;
    // console.log(value);
    // debugger;
    if (value === 'Alphanumeric 4') {
      this.setState({ isVisible: true, selectedSpan: value });
    } else this.setState({ isVisible: false, selectedSpan: value });
  };

  render() {
    const { selectedSpan, isVisible } = this.state;

    return (
      <Box className="pr-5" padding="40px">
        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12 px-0">
            <FormTitle>SOURCE ACCOUNT</FormTitle>
          </div>
          <InputContainerLarge
            className="col-lg-9 col-md-9 col-sm-12"
            value="Example: 3389e9f0f1a65f19736cacf544c2e825313e8447f569233bb8db39aa607c8889"
          />
        </div>

        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12 px-0">
            <FormTitle>DESTINATION ACCOUNT</FormTitle>
          </div>
          <InputContainerLarge
            className="col-lg-9 col-md-9 col-sm-12"
            value="Example: 3389e9f0f1a65f19736cacf544c2e825313e8447f569233bb8db39aa607c8889"
          />
        </div>

        <div className="mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
              <FormTitle>SELLING ASSET</FormTitle>
            </div>
            <div className="row mt-2 ml-1">
              {Assets.map(asset => {
                return (
                  <Span
                    key={asset}
                    select={asset === selectedSpan ? true : false}
                    onClick={this.onClickSpan}
                  >
                    {asset}
                  </Span>
                );
              })}
            </div>
          </div>
        </div>

        {isVisible === true ? (
          <div>
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12" />
              <InputContainerLarge
                className="col-lg-9 col-md-12 col-sm-12 mt-4"
                value="Asset Code"
              />
            </div>

            <div className="row mt-4">
              <div className="col-lg-3 col-md-12 col-sm-12" />
              <InputContainerLarge
                className="col-lg-9 col-md-12 col-sm-12"
                value="Issuer Account ID"
              />
            </div>
          </div>
        ) : (
          <div />
        )}

        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12 px-0">
            <FormTitle>DESTINATION AMOUNT</FormTitle>
          </div>
          <InputContainerLarge
            className="col-lg-9 col-md-9 col-sm-12"
            value=""
          />
        </div>

        <div className="row mt-5">
          <Info>Server-Sent Events (streaming) mode</Info>
          <Info>
            {
              'https://horizon-testnet.stellar.org/order_book?selling_asset_type=credit_alphanum4&buying_asset_type=credit_alphanum4'
            }
          </Info>
        </div>
      </Box>
    );
  }
}
