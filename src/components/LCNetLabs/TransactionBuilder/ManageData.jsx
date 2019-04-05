import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import FormTitle from '../../shared/FormTitle';
import TextSpan from './TextSpan';
import FormSubTitle from '../../shared/FormSubTitle';

export default class AccountMerge extends PureComponent {
  state = {};

  render() {
    return (
      <div>
        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>ENTRY NAME</FormTitle>
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
            <FormTitle>ENTRY VALUE</FormTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="" />
            <br />
            <TextSpan>
              If empty, will delete the data entry named in this operation.
              Note: The laboratory only supports strings.
            </TextSpan>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12">
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
