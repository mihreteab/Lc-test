import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';

const Options = ['True', 'False'];

export default class ChangeTrust extends PureComponent {
  state = {
    selectedSpan: 'True',
  };

  render() {
    const { selectedSpan } = this.state;

    return (
      <div>
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">TRUSTER</h2>
            <span className="ml-2">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">ASSET CODE</h2>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">AUTHORIZE</h2>
          </div>
          <div className="d-flex col-md-8">
            {Options.map(asset => {
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
