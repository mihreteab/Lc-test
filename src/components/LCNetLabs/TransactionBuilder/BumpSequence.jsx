import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import FormTitle from '../../shared/FormTitle';
import FormSubTitle from '../../shared/FormSubTitle';

export default class BumpSequence extends PureComponent {
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
            <FormTitle>BUMP TO</FormTitle>
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
