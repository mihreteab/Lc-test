import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';
import FormTitle from '../../shared/FormTitle';
import TextSpan from './TextSpan';
import FormSubTitle from '../../shared/FormSubTitle';

const Assets = ['Native', 'Alphanumeric 4', 'Alphanumeric 12'];

export default class ManageOffer extends PureComponent {
  state = {
    selectedSpan: 'Native',
  };

  onClickSpan = e => {
    this.setState({ selectedSpan: e.target.innerText });
  };

  render() {
    const { selectedSpan } = this.state;

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

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
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
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>
              PRICE OF 1 UNIT OF ASSET <br /> FOR SALE
            </FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
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
            <FormTitle>OFFER ID</FormTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="" />
            <br />
            <TextSpan>
              If 0, will create a new offer. Existing offer id numbers can be
              found using the Offers for Account endpoint.
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
            <FormTitle>CURSOR</FormTitle>
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
