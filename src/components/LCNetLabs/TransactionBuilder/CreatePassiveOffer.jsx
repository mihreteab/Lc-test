import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';
import FormTitle from '../../shared/FormTitle';
// import FormSubTitle from '../../shared/FormSubTitle';
// import Info from '../../shared/Info';
import TextSpan from './TextSpan';

const Assets = ['Native', 'Alphanumeric 4', 'Alphanumeric 12'];

export default class CreatePassiveOffer extends PureComponent {
  state = {
    selectedSelling: 'Native',
    selectedBuying: 'Native',
  };

  onClickSpan = e => {
    const value = e.target.textContent;
    const name = e.target.id;
    this.setState({ [name]: value });
  };

  render() {
    const { selectedSelling, selectedBuying } = this.state;

    return (
      <div>
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
            <FormTitle>SELLING</FormTitle>
          </div>
          <div className="d-flex col-lg-9 col-md-9 col-sm-12">
            {Assets.map(asset => (
              <Span
                id="selectedSelling"
                key={asset}
                select={asset === selectedSelling}
                onClick={this.onClickSpan}
              >
                {asset}
              </Span>
            ))}
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>BUYING</FormTitle>
          </div>
          <div className="d-flex col-lg-9 col-md-9 col-sm-12">
            {Assets.map(asset => (
              <Span
                id="selectedBuying"
                key={asset}
                select={asset === selectedBuying}
                onClick={this.onClickSpan}
              >
                {asset}
              </Span>
            ))}
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <FormTitle>
              AMOUNT YOU ARE <br /> SELLING
            </FormTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="" />
            <br />
            <TextSpan>An amount of zero will delete the offer.</TextSpan>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">
              PRICE OF 1 UNIT OF ASSET FOR SALE
            </h2>
            <span className="ml-2">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">CURSOR</h2>
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
