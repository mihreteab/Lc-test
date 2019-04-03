import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';

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
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">DESTINATION</h2>
          </div>
          <InputContainerLarge className="col-md-8 col-sm-12" value="" />
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">BASE ASSET</h2>
          </div>
          <div className="d-flex col-md-8 pl-1">
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
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">AMOUNT</h2>
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
