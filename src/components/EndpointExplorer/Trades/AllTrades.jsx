import React, { PureComponent } from 'react';

import Box from '../../shared/Box';
import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';
import Title from '../../shared/Title';

const Assets = ['Native', 'Alphanumeric 4', 'Alphanumeric 12'];

export default class AllTrades extends PureComponent {
  state = {
    selectedSpan: 'Native',
  };

  onClickSpan = e => {
    const value = e.target.textContent;
    this.setState({ selectedSpan: value });
  };

  render() {
    const { selectedSpan } = this.state;
    return (
      <div>
        <Title>ALL TRADES</Title>
        <Box padding="40px">
          <div className="mt-5">
            <div className="row">
              <h2 className="col-lg-4 col-md-4 font-weight-bold px-0">
                BASE ASSET
              </h2>
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

          <div className="mt-5">
            <div className="row">
              <h2 className="col-lg-4 col-md-4 font-weight-bold px-0">
                COUNTER ASSET
              </h2>
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

          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 px-0">
              <h2 className="font-weight-bold">OFFER ID</h2>
              <span>(Optional)</span>
            </div>
            <InputContainerLarge
              className="col-lg-8 col-md-8 col-sm-12"
              value=""
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 px-0">
              <h2 className="font-weight-bold">CURSOR</h2>
              <span>(Optional)</span>
            </div>
            <InputContainerLarge
              className="col-lg-8 col-md-8 col-sm-12"
              value=""
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 px-0">
              <h2 className="font-weight-bold">LIMIT</h2>
              <span>(Optional)</span>
            </div>
            <InputContainerLarge
              className="col-lg-8 col-md-8 col-sm-12"
              value=""
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 px-0">
              <h2 className="font-weight-bold">ORDER</h2>
              <span>(Optional)</span>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 mt-2 px-0">
              <Span>asc</Span>
              <Span>desc</Span>
            </div>
          </div>

          <div className="row mt-5">
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0">
              Server-Sent Events (streaming) mode
            </p>
            <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0">
              https://horizon-testnet.stellar.org/trades
            </p>
          </div>
        </Box>
      </div>
    );
  }
}
