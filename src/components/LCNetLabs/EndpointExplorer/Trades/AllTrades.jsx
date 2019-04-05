import React, { PureComponent } from 'react';

import Box from '../../../shared/Box';
import InputContainerLarge from '../../../shared/InputContainerLarge';
import Span from '../../../shared/Span';
import Title from '../../../shared/Title';
import FormTitle from '../../../shared/FormTitle';
import FormSubTitle from '../../../shared/FormSubTitle';
import Info from '../../../shared/Info';

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
              <div className="col-lg-3 col-md-3 col-sm-12 px-0">
                <FormTitle>BASE ASSET</FormTitle>
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

          <div className="mt-5">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 px-0">
                <FormTitle>COUNTER ASSET</FormTitle>
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

          <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
              <FormTitle>OFFER ID</FormTitle>
              <FormSubTitle>(Optional)</FormSubTitle>
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
              <FormSubTitle>(Optional)</FormSubTitle>
            </div>
            <InputContainerLarge
              className="col-lg-9 col-md-9 col-sm-12"
              value=""
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
              <FormTitle>ORDER</FormTitle>
              <FormSubTitle>(Optional)</FormSubTitle>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 mt-2 px-0">
              <Span>asc</Span>
              <Span>desc</Span>
            </div>
          </div>

          <div className="row mt-5">
            <Info>Server-Sent Events (streaming) mode</Info>
            <Info>https://horizon-testnet.stellar.org/trades</Info>
          </div>
        </Box>
      </div>
    );
  }
}
