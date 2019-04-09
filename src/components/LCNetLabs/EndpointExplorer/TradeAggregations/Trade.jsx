import React, { PureComponent } from 'react';

import Box from '../../../shared/Box';
import InputContainerLarge from '../../../shared/InputContainerLarge';
import Span from '../../../shared/Span';
import FormTitle from '../../../shared/FormTitle';
import FormSubTitle from '../../../shared/FormSubTitle';
import Info from '../../../shared/Info';

const Assets = ['Native', 'Alphanumeric 4', 'Alphanumeric 12'];

export default class Trade extends PureComponent {
  state = {
    selectedBaseAsset: 'Native',
    selectedCounterAsset: 'Native',
  };

  onClickSpan = e => {
    const value = e.target.textContent;
    const name = e.target.id;
    this.setState({ [name]: value });
  };

  render() {
    const { selectedBaseAsset, selectedCounterAsset } = this.state;
    return (
      <Box padding="40px">
        <div className="mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
              <FormTitle>BASE ASSET</FormTitle>
            </div>
            <div className="row mt-2 ml-1">
              {Assets.map(asset => (
                <Span
                  id="selectedBaseAsset"
                  key={asset}
                  select={asset === selectedBaseAsset}
                  onClick={this.onClickSpan}
                >
                  {asset}
                </Span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
              <FormTitle>COUNTER ASSET</FormTitle>
            </div>
            <div className="row mt-2 ml-1">
              {Assets.map(asset => (
                <Span
                  id="selectedCounterAsset"
                  key={asset}
                  select={asset === selectedCounterAsset}
                  onClick={this.onClickSpan}
                >
                  {asset}
                </Span>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12 px-0">
            <FormTitle>START TIME</FormTitle>
          </div>
          <InputContainerLarge
            className="col-lg-9 col-md-9 col-sm-12"
            value=""
          />
        </div>

        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12 px-0">
            <FormTitle>END TIME</FormTitle>
          </div>
          <InputContainerLarge
            className="col-lg-9 col-md-9 col-sm-12"
            value=""
          />
        </div>

        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12 px-0">
            <FormTitle>RESOLUTION</FormTitle>
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
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 mt-2 px-0">
            <Span>asc</Span>
            <Span>desc</Span>
          </div>
        </div>

        <div className="row mt-5">
          <Info>Server-Sent Events (streaming) mode</Info>
        </div>
      </Box>
    );
  }
}
