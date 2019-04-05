import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import FormTitle from '../../shared/FormTitle';
import FormSubTitle from '../../shared/FormSubTitle';

export default class AccountMerge extends PureComponent {
  state = {};

  render() {
    return (
      <div className="pt-3">
        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <FormTitle paddingLeft={true}>DESTINATION</FormTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <FormTitle paddingLeft={true}>SOURCE ACCOUNT</FormTitle>
            <FormSubTitle className="ml-4">(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>
      </div>
    );
  }
}
