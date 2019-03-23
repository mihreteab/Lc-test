import React, { PureComponent } from 'react';

import Box from '../../shared/Box';
import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';

const Assets = ['Native', 'Alphanumeric 4', 'Alphanumeric 12'];

export default class Trade extends PureComponent {
  state = {};

  render() {
    return (
      <Box>
        <div className="mt-5">
          <div className="row">
            <h2 className="col-md-4 font-weight-bold">BASE ASSET</h2>
            <div className="d-flex col-md-8 pl-1">
              {Assets.map(asset => {
                return (
                  <Span
                    key={asset}
                    // select={asset === selectedSellSpan ? true : false}
                    // onClick={this.onSellSpan}
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
            <h2 className="col-md-4 font-weight-bold">COUNTER ASSET</h2>
            <div className="d-flex col-md-8 pl-1">
              {Assets.map(asset => {
                return (
                  <Span
                    key={asset}
                    // select={asset === selectedBuySpan ? true : false}
                    // onClick={this.onBuySpan}
                  >
                    {asset}
                  </Span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <div>
              <h2 className="font-weight-bold">START TIME</h2>
            </div>
          </div>
          <InputContainerLarge className="col-md-8 col-sm-12" value="" />
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <div>
              <h2 className="font-weight-bold">END TIME</h2>
            </div>
          </div>
          <InputContainerLarge className="col-md-8 col-sm-12" value="" />
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <div>
              <h2 className="font-weight-bold">RESOLUTION</h2>
            </div>
          </div>
          <InputContainerLarge className="col-md-8 col-sm-12" value="" />
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <div>
              <h2 className="font-weight-bold">LIMIT</h2>
              <span>(Optional)</span>
            </div>
          </div>
          <InputContainerLarge className="col-md-8 col-sm-12" value="" />
        </div>

        <div className="mt-5">
          <div className="mr-5">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <h2 className="font-weight-bold">ORDER</h2>
                <span>(Optional)</span>
              </div>
              <div className="p-3 col-md-8">
                <Span select="true">asc</Span>
                <Span>desc</Span>
              </div>
            </div>
          </div>
        </div>

        <p className="m-2 mt-5">Server-Sent Events (streaming) mode</p>
      </Box>
    );
  }
}
