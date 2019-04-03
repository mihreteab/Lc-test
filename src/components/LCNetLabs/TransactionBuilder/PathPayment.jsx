import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';

const Assets = ['Native', 'Alphanumeric 4', 'Alphanumeric 12'];

export default class PathPayment extends PureComponent {
  state = {
    selectedSpan: 'Native',
    count: 1,
  };

  onClickSpan = e => {
    this.setState({ selectedSpan: e.target.innerText });
  };

  addNewAsset = e => {
    const { count } = this.state;
    console.log('Add New');
    this.setState({ count: count + 1 });
  };

  onRemoveAsset = e => {
    const { count } = this.state;
    console.log('remove New');
    this.setState({ count: count - 1 });
  };

  render() {
    const { selectedSpan, count } = this.state;
    return (
      <div className="pt-3">
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">DESTINATION</h2>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">SENDING ASSET</h2>
          </div>
          <div className="d-flex flex-column col-md-8">
            <div className="d-flex">
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
            <span>The asset to be deduced from the sender's account</span>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">
              MAXIMUM SEND <br /> AMOUNT
            </h2>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="" />
            <br />
            <span>
              The most the sender is willing to spend to take the paths to.
              Resulting amount may vary due to the offers in the orderbook.
            </span>
          </div>
        </div>

        {/* MENU ADDED HERE */}

        {[...Array(count)].map((value, index) => {
          return (
            <div className="row mt-5" key={index}>
              <div className="col-md-4 col-sm-12">
                <h2 className="m-3 font-weight-bold">SENDING ASSET</h2>
              </div>
              <div className="d-flex col-md-8">
                <div className="d-flex">
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

                <div className="col-md-2 mt-3 text-center">
                  <p
                    style={{
                      color: '#636161',
                      fontWeight: 'bold',
                    }}
                  >
                    # {(index + 1).toString()}
                  </p>
                </div>

                <div className="col-md-2 mt-2">
                  <button
                    onClick={this.onRemoveAsset}
                    className="btn btn-primary btn-lg"
                    style={{
                      padding: '10px 12px',
                    }}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12" />
          <div className="col-md-8 col-sm-12">
            <button
              onClick={this.addNewAsset}
              className="btn btn-primary px-5 py-3"
              type="button"
            >
              Add new intermediatory asset
            </button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">SENDING ASSET</h2>
          </div>
          <div className="d-flex flex-column col-md-8">
            <div className="d-flex">
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
            <span>The asset to be received by the destination account</span>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">DESTINATION AMOUNT</h2>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">SOURCE ACCOUNT</h2>
            <span className="ml-2">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge
              value="
            Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
          </div>
        </div>
      </div>
    );
  }
}
