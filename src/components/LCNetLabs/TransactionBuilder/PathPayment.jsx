import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';
import FormTitle from '../../shared/FormTitle';
import TextSpan from './TextSpan';
import FormSubTitle from '../../shared/FormSubTitle';

const Assets = ['Native', 'Alphanumeric 4', 'Alphanumeric 12'];

export default class PathPayment extends PureComponent {
  state = {
    selectedSpan1: 'Native',
    selectedSpan2: 'Native',
    dynamicSelectedSpan: [{ selectedSpan: 'Native' }],
  };

  onClickSpan = e => {
    const value = e.target.textContent;
    const name = e.target.id;
    this.setState({ [name]: value });
  };

  onClickDynamicSpan = (e, index) => {
    const value = e.target.textContent;
    const { dynamicSelectedSpan } = this.state;
    const newDynamicSelectedSpan = dynamicSelectedSpan;
    newDynamicSelectedSpan[index].selectedSpan = value;
    this.setState({ dynamicSelectedSpan: newDynamicSelectedSpan });
    this.forceUpdate();
  };

  addNewAsset = () => {
    const { dynamicSelectedSpan } = this.state;
    const newDynamicSelectedSpan = dynamicSelectedSpan;
    newDynamicSelectedSpan.push({
      selectedSpan: 'Native',
    });
    this.setState({ dynamicSelectedSpan: newDynamicSelectedSpan });
    this.forceUpdate();
  };

  onRemoveAsset = index => {
    const { dynamicSelectedSpan } = this.state;
    const newDynamicSelectedSpan = dynamicSelectedSpan;
    newDynamicSelectedSpan.splice(index, 1);
    this.setState({ dynamicSelectedSpan: newDynamicSelectedSpan });
    this.forceUpdate();
  };

  render() {
    const { selectedSpan1, selectedSpan2, dynamicSelectedSpan } = this.state;
    return (
      <div className="pt-3">
        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>DESTINATION</FormTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>SENDING ASSET</FormTitle>
          </div>
          <div className="d-flex flex-column col-lg-9 col-md-9">
            <div className="d-flex">
              {Assets.map(asset => (
                <Span
                  id="selectedSpan1"
                  key={asset}
                  select={asset === selectedSpan1}
                  onClick={this.onClickSpan}
                >
                  {asset}
                </Span>
              ))}
            </div>
            <TextSpan>
              The asset to be deduced from the sender's account
            </TextSpan>
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>
              MAXIMUM SEND <br /> AMOUNT
            </FormTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="" />
            <br />
            <TextSpan>
              The most the sender is willing to spend to take the paths to.
              Resulting amount may vary due to the offers in the orderbook.
            </TextSpan>
          </div>
        </div>

        {/* MENU ADDED HERE */}

        {dynamicSelectedSpan.map((value, index) => (
          <div className="row mt-5" key={index}>
            <div
              className="col-lg-3 col-md-3 col-sm-12"
              style={{
                paddingLeft: '5%',
              }}
            >
              <FormTitle>SENDING ASSET</FormTitle>
            </div>
            <div className="d-flex col-lg-9 col-md-9 col-sm-12">
              <div className="d-flex">
                {Assets.map(asset => (
                  <Span
                    key={asset}
                    select={asset === value.selectedSpan}
                    onClick={e => this.onClickDynamicSpan(e, index)}
                  >
                    {asset}
                  </Span>
                ))}
              </div>

              <div className="col-lg-2 col-md-2 mt-3 text-center">
                <p
                  style={{
                    color: '#636161',
                    fontWeight: 'bold',
                  }}
                >
                  # {(index + 1).toString()}
                </p>
              </div>

              <div className="col-lg-2 col-md-2 mt-2">
                <button
                  onClick={() => this.onRemoveAsset(index)}
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
        ))}

        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12" />
          <div className="col-lg-9 col-md-9 col-sm-12">
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
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>SENDING ASSET</FormTitle>
          </div>
          <div className="d-flex flex-column col-lg-9 col-md-9">
            <div className="d-flex">
              {Assets.map(asset => (
                <Span
                  id="selectedSpan2"
                  key={asset}
                  select={asset === selectedSpan2}
                  onClick={this.onClickSpan}
                >
                  {asset}
                </Span>
              ))}
            </div>
            <TextSpan>
              The asset to be received by the destination account
            </TextSpan>
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>DESTINATION AMOUNT</FormTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>SOURCE ACCOUNT</FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
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
