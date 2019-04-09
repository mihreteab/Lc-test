import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';
import FormTitle from '../../shared/FormTitle';
import FormSubTitle from '../../shared/FormSubTitle';
// import Info from '../../shared/Info';

import TextSpan from './TextSpan';

const Assets = ['Alphanumeric 4', 'Alphanumeric 12'];

export default class ChangeTrust extends PureComponent {
  state = {
    selectedSelling: 'Alphanumeric 4',
  };

  onClickSpan = e => {
    const value = e.target.textContent;
    const name = e.target.id;
    this.setState({ [name]: value });
  };

  render() {
    const { selectedSelling } = this.state;

    return (
      <div>
        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>INFLATION DESTINATION</FormTitle>
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
            <FormTitle>SELLING ASSET</FormTitle>
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
            <FormTitle>TRUST LIMIT</FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="" />
            <br />
            <TextSpan>
              Leave empty to default to the max int64. <br /> Set to 0 to remove
              the trust line.
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
            <FormTitle>SOURCE ACCOUNT</FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>
      </div>
    );
  }
}
