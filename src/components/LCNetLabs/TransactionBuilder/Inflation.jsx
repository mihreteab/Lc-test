import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import FormTitle from '../../shared/FormTitle';

export default class Inflation extends PureComponent {
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
            <FormTitle>SOURCE ACCOUNT</FormTitle>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>
      </div>
    );
  }
}
