import React, { PureComponent } from 'react';

import InputContainerLarge from '../../shared/InputContainerLarge';
import Span from '../../shared/Span';
import FormTitle from '../../shared/FormTitle';
import FormSubTitle from '../../shared/FormSubTitle';

const Options = ['True', 'False'];

export default class ChangeTrust extends PureComponent {
  state = {
    selectedSpan: 'True',
  };

  onClickSpan = e => {
    const value = e.target.textContent;
    const name = e.target.id;
    this.setState({ [name]: value });
  };

  render() {
    const { selectedSpan } = this.state;

    return (
      <div>
        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-3 col-sm-12"
            style={{
              paddingLeft: '5%',
            }}
          >
            <FormTitle>TRUSTER</FormTitle>
            <FormSubTitle>(Optional)</FormSubTitle>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
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
            <FormTitle>ASSET CODE</FormTitle>
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
            <FormTitle>AUTHORIZE</FormTitle>
          </div>
          <div className="d-flex colg-lg-9 col-md-9 col-sm-12">
            {Options.map(asset => (
              <Span
                id="selectedSpan"
                key={asset}
                select={asset === selectedSpan}
                onClick={this.onClickSpan}
              >
                {asset}
              </Span>
            ))}
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
            <InputContainerLarge value="" />
          </div>
        </div>
      </div>
    );
  }
}
