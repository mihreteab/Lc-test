import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';
import FormTitle from '../../shared/FormTitle';
import FormSubTitle from '../../shared/FormSubTitle';

const Assets = ['Native', 'Alphanumeric 4', 'Alphanumeric 12'];

export default class Payment extends PureComponent {
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
          <InputContainerLarge
            className="col-lg-9 col-md-9 col-sm-12"
            value=""
          />
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>BASE ASSET</FormTitle>
          </div>
          <div className="d-flex col-lg-9 col-md-9 col-sm-12 pl-1">
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
            <FormTitle>AMOUNT</FormTitle>
          </div>
          <InputContainerLarge
            className="col-lg-9 col-md-9 col-sm-12"
            value=""
          />
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
          <InputContainerLarge
            className="col-lg-9 col-md-9 col-sm-12"
            value=""
          />
        </div>
      </div>
    );
  }
}
