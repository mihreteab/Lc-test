import React, { PureComponent } from 'react';

import InputContainerLarge from '../shared/InputContainerLarge';
import Span from '../shared/Span';

const Flags = [
  'Authorization required',
  'Authorization revocable',
  'Authorization immutable',
];

export default class SetOption extends PureComponent {
  state = {
    selectedSpan: 'Authorization required',
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
            <h2 className="m-3 font-weight-bold">INFLATION DESTINATION</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">SET FLAGS</h2>
          </div>
          <div className="d-flex flex-column col-md-8">
            <div className="d-flex">
              {Flags.map(flag => {
                return (
                  <Span
                    key={flag}
                    select={flag === selectedSpan ? true : false}
                    onClick={this.onClickSpan}
                  >
                    {flag}
                  </Span>
                );
              })}
            </div>
            <span>
              {`Authorization immutable (4) + Authorization revocable (2) +
              Authorization required (1) = 7`}
            </span>
            <span
              style={{
                fontSize: '14px',
                lineHeight: '19px',
                color: '#52616B',
              }}
            >
              Selected flags mean to add selected flags in addition to flags
              already present on the account.
            </span>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">CLEAR FLAGS</h2>
          </div>
          <div className="d-flex flex-column col-md-8">
            <div className="d-flex">
              <Span select={true} onClick={this.onClickSpan}>
                Authorization required
              </Span>
              <Span onClick={this.onClickSpan}>Authorization revocable</Span>
            </div>
            <span>Authorization required (1) = 1</span>
            <span
              style={{
                fontSize: '14px',
                lineHeight: '19px',
                color: '#52616B',
              }}
            >
              Selected flags mean to remove selected flags already present on
              the account.
            </span>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">MASTER WEIGHT</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">LOW THRESHOLD</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">MEDIUM THRESHOLD</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">HIGH THRESHOLD</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        {/* TODO: DROPDOWN MENU HERE */}

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">HOME DOMINE</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2 className="m-3 font-weight-bold">SOURCE ACCOUNT</h2>
            <span className="ml-3">(Optional)</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <InputContainerLarge value="0.255" />
          </div>
        </div>
      </div>
    );
  }
}
