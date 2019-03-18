import React, { PureComponent } from 'react';

import Box from '../../shared/Box';
import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../Span';

const Assets = ['Native', 'Alphanumeric 4', 'Alphanumeric 12'];

export default class Details extends PureComponent {
  state = {
    selectedSpan: 'Native',
    isBuyVisible: false,
    isSellVisible: false,
  };

  onBuySpan = e => {
    const value = e.target.textContent;
    if (value === 'Alphanumeric 4') this.setState({ isBuyVisible: true });
    this.setState({ selectedSpan: e.target.textContent });
  };

  render() {
    const { selectedSpan, isBuyVisible, isSellVisible } = this.state;

    return (
      <Box >
        <div className="mt-5">
          <div className="row col-md-12">
            <h2 className="col-md-6 font-weight-bold">SELLING ASSET</h2>
            <div className="d-flex col-md-10 pl-1">
              {Assets.map(asset => {
                return (
                  <Span
                    key={asset}
                    select={asset === selectedSpan ? true : false}
                    onClick={this.onBuySpan}
                  >
                    {asset}
                  </Span>
                );
              })}
            </div>
          </div>
        </div>

        {/* {isBuyVisible === true ? (
          <div>
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

        {/* <div className="mt-5">
          <div className="row">
            <h2 className="mx-5 mt-2 font-weight-bold">BUYING ASSET</h2>
            <div className="d-flex">
              <Span>Native</Span>
              <Span>Alphanumeric 4</Span>
              <Span>Alphanumeric 12</Span>
            </div>
          </div>
        </div> */}

        <p className="m-2 mt-5">Server-Sent Events (streaming) mode</p>
        <p className="m-2 mt-5">
          {
            'https://horizon-testnet.stellar.org/order_book?selling_asset_type=native'
          }
        </p>
      </Box>
    );
  }
}
