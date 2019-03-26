import React, { PureComponent } from 'react';

import InputContainerLarge from '../shared/InputContainerLarge';

export default class AccountMerge extends PureComponent {
  state = {};

  render() {
    return (
      <div>
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">ENTRY NAME</h2>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">ENTRY VALUE</h2>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="" />
            <br />
            <span>
              If empty, will delete the data entry named in this operation.
              Note: The laboratory only supports strings.
            </span>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">SOURCE ACCOUNT</h2>
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
