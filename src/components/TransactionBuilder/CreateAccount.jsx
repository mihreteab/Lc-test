import React, { PureComponent } from 'react';
import InputContainerLarge from '../shared/InputContainerLarge';

export default class CreateAccount extends PureComponent {
  state = {};

  render() {
    return (
      <div>
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">DESTINATION</h2>
          </div>
          <InputContainerLarge className="col-md-8 col-sm-12" value="" />
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">STARTING BALANCE</h2>
          </div>
          <InputContainerLarge className="col-md-8 col-sm-12" value="" />
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">SOURCE ACCOUNT</h2>
            <span>(Optional)</span>
          </div>
          <InputContainerLarge className="col-md-8 col-sm-12" value="" />
        </div>
      </div>
    );
  }
}
