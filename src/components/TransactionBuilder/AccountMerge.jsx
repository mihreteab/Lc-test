import React, { PureComponent } from 'react';

import InputContainerLarge from '../shared/InputContainerLarge';

export default class AccountMerge extends PureComponent {
  state = {};

  render() {
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
            <h2 className="m-3 font-weight-bold">SOURCE ACCOUNT</h2>
            <span className="ml-2">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>
      </div>
    );
  }
}