import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import FormTitle from '../../shared/FormTitle';
import FormSubTitle from '../../shared/FormSubTitle';
import Info from '../../shared/Info';

export default class CreateAccount extends PureComponent {
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
            <FormTitle>STARTING BALANCE</FormTitle>
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
