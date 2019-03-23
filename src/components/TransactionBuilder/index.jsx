import React, { PureComponent } from 'react';

import Box from '../shared/Box';
import Wrapper from '../shared/Wrapper';
import InputContainerLarge from '../shared/InputContainerLarge';
import Span from '../shared/Span';
import CreateAccount from './CreateAccount';

const Memo = ['None', 'Text', 'ID', 'Hash', 'Return'];

export default class TransactionBuilder extends PureComponent {
  state = {
    selectedSpan: 'Text',
    operationCount: 1,
  };

  onClickSpan = e => {
    console.log(e);
  };

  render() {
    const { selectedSpan, operationCount } = this.state;
    return (
      <Wrapper>
        <Box>
          <div className="row mt-5">
            <div className="col-md-3 col-sm-12">
              <h2 className="mt-2 font-weight-bold">SOURCE ACCOUNT</h2>
            </div>
            <div className="col-md-9 col-sm-12">
              <InputContainerLarge
                className="mb-2"
                value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
              />
              <span>
                <br />
                If you don't have an account yet, you can create and fund a test
                net account with the account creator.
              </span>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-3 col-sm-12">
              <h2 className="mt-2 font-weight-bold">
                TRANSACTION SEQUENCE NUMBER
              </h2>
            </div>
            <div className="col-md-9 col-sm-12">
              <InputContainerLarge
                className="mb-2"
                value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
              />
              <span>
                <br />
                The transaction sequence number is usually one higher than
                current account sequence number.
              </span>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-3 col-sm-12">
              <h2 className="mt-2 font-weight-bold">BASE FEE</h2>
              <span>(Optional)</span>
            </div>
            <div className="col-md-9 col-sm-12">
              <InputContainerLarge
                className="mb-2"
                value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
              />
              <span>
                <br />
                The network base fee is currently set to 100 stroops (0.00001
                lumens). Transaction fee is equal to base fee times number of
                operations in this transaction.
              </span>
            </div>
          </div>

          <div className="mt-5">
            <div className="mr-5">
              <div className="row">
                <h2 className="col-md-3 font-weight-bold">ORDER</h2>
                <div className="p-3 col-md-9">
                  {Memo.map(key => {
                    return (
                      <Span
                        key={key}
                        onClick={this.onClickSpan}
                        select={key === selectedSpan ? true : false}
                      >
                        {key}
                      </Span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-3 col-sm-12">
              <h2 className="mt-2 font-weight-bold">TIME BOUNDS</h2>
              <span>(Optional)</span>
            </div>
            <div className="col-md-9 col-sm-12">
              <InputContainerLarge
                className="mb-2"
                value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
              />

              <InputContainerLarge
                className="mb-2"
                value="Example: GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
              />

              <span>
                <br />
                Enter unix timestamp values of time bounds when this transaction
                will be valid.
              </span>

              <span>
                <br />
                For regular transactions, it is highly recommended to set
                max_time to get a final result of a transaction in a defined
                time.
              </span>

              <br />
              <button
                className="mt-2 mb-5"
                type="button"
                style={{
                  background: '#0084F8',
                  borderRadius: '4px',
                  padding: '15px',
                  color: '#fff',
                }}
              >
                Set to 5 minutes from now
              </button>
            </div>
          </div>
        </Box>

        <div className="row m-5">
          <div className="col-md-1">
            <p
              style={{
                padding: '10px 20px',
                fontSize: '50px',
                border: '2px solid #C9D6DF',
                borderRadius: '4px',
              }}
            >
              {operationCount}
            </p>
          </div>
          <div
            className="col-md-2"
            style={{
              margin: '30px 0px',
            }}
          >
            <h3>OPERATION TYPE</h3>
          </div>
          <div className="col-md-8">
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                Dropdown Example
                <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <CreateAccount />
        </div>
      </Wrapper>
    );
  }
}
