import React, { PureComponent } from 'react';

import Box from '../../shared/Box';
import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';

const buyAssets = ['Native', 'Alphanumeric 4', 'Alphanumeric 12'];
const sellAssets = ['Native', 'Alphanumeric 4', 'Alphanumeric 12'];

export default class Details extends PureComponent {
  state = {
    selectedBuySpan: 'Native',
    selectedSellSpan: 'Native',
    isBuyVisible: false,
    isSellVisible: false,
  };

  onBuySpan = e => {
    const value = e.target.innerText;
    // console.log(value);
    // debugger;
    if (value === 'Alphanumeric 4') {
      this.setState({ isBuyVisible: true, selectedBuySpan: value });
    } else this.setState({ isBuyVisible: false, selectedBuySpan: value });
  };

  onSellSpan = e => {
    const value = e.target.innerText;
    if (value === 'Alphanumeric 4') {
      this.setState({ isSellVisible: true, selectedSellSpan: value });
    } else this.setState({ isSellVisible: false, selectedSellSpan: value });
  };

  render() {
    const {
      selectedBuySpan,
      selectedSellSpan,
      isBuyVisible,
      isSellVisible,
    } = this.state;

    return (
      <div>
        <Box>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 px-0">
              <h2 className="font-weight-bold">SELLING ASSET</h2>
            </div>
            <div className="mt-2">
              {sellAssets.map(asset => {
                return (
                  <Span
                    key={asset}
                    select={asset === selectedSellSpan ? true : false}
                    onClick={this.onSellSpan}
                    className="col-lg-2 col-md-2 col-sm-12"
                  >
                    {asset}
                  </Span>
                );
              })}
            </div>
          </div>

          {/* {isSellVisible === true ? (
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
        )} */}

          <div className="row mt-5">
            <h2 className="col-md-4 font-weight-bold px-0">BUYING ASSET</h2>
            <div className="d-flex col-md-8 pl-1">
              {buyAssets.map(asset => {
                return (
                  <Span
                    key={asset}
                    select={asset === selectedBuySpan ? true : false}
                    onClick={this.onBuySpan}
                  >
                    {asset}
                  </Span>
                );
              })}
            </div>
          </div>

          {/* {isBuyVisible === true ? (
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
        )} */}

          <div className="row mt-5">
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              Server-Sent Events (streaming) mode
            </p>
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {
                'https://horizon-testnet.stellar.org/order_book?selling_asset_type=native'
              }
            </p>
          </div>
        </Box>
      </div>
    );
  }
}
