import React, { PureComponent } from 'react';

import Box from '../../shared/Box';
import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';

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
      <Box className="pr-5">
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="mt-2 font-weight-bold">SOURCE ACCOUNT</h2>
          </div>
          <InputContainerLarge
            className="col-md-8 col-sm-12"
            value="Example: 3389e9f0f1a65f19736cacf544c2e825313e8447f569233bb8db39aa607c8889"
          />
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="mt-2 font-weight-bold">DESTINATION ACCOUNT</h2>
          </div>
          <InputContainerLarge
            className="col-md-8 col-sm-12"
            value="Example: 3389e9f0f1a65f19736cacf544c2e825313e8447f569233bb8db39aa607c8889"
          />
        </div>

        <div className="mt-5">
          <div className="row">
            <h2 className="col-md-4 font-weight-bold">SELLING ASSET</h2>
            <div className="d-flex col-md-8 pl-1">
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
          <div className="mr-4">
            <div className="row">
              <div className="col-md-4 col-sm-12" />
              <InputContainerLarge
                className="col-md-8 col-sm-12 mt-4"
                value="Asset Code"
              />
            </div>

            <div className="row mt-4">
              <div className="col-md-4 col-sm-12" />
              <InputContainerLarge
                className="col-md-8 col-sm-12"
                value="Issuer Account ID"
              />
            </div>
          </div>
        ) : (
          <div />
        )}

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="mt-2 font-weight-bold">DESTINATION AMOUNT</h2>
          </div>
          <InputContainerLarge className="col-md-8 col-sm-12" value="" />
        </div>

        <p className="m-2 mt-5">Server-Sent Events (streaming) mode</p>
        <p className="m-2 mt-5">
          {
            'https://horizon-testnet.stellar.org/order_book?selling_asset_type=credit_alphanum4&buying_asset_type=credit_alphanum4'
          }
        </p>
      </Box>
    );
  }
}
