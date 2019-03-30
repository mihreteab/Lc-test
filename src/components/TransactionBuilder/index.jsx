import React, { PureComponent } from 'react';

import Box from '../shared/Box';
import Wrapper from '../shared/Wrapper';
import InputContainerLarge from '../shared/InputContainerLarge';
import Span from '../shared/Span';
import TextSpan from './TextSpan';
import Row from './Row';
import Button from './Button';

const Memo = ['None', 'Text', 'ID', 'Hash', 'Return'];

export default class TransactionBuilder extends PureComponent {
  state = {
    selectedSpan: 'Text',
    operationCount: 1,
  };

  onClickSpan = e => {
    console.log(e);
  };

  onAddOperation = e => {
    const { operationCount } = this.state;
    this.setState({ operationCount: operationCount + 1 });
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
              <TextSpan>
                If you don't have an account yet, you can create and fund a test
                net account with the account creator.
              </TextSpan>
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
              <TextSpan>
                The transaction sequence number is usually one higher than
                current account sequence number.
              </TextSpan>
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
              <TextSpan>
                The network base fee is currently set to 100 stroops (0.00001
                lumens). Transaction fee is equal to base fee times number of
                operations in this transaction.
              </TextSpan>
            </div>
          </div>

          <div className="mt-5">
            <div className="mr-5">
              <div className="row">
                <h2 className="col-md-3 font-weight-bold">ORDER</h2>
                <div className="mt-3 col-md-9">
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

              <TextSpan>
                Enter unix timestamp values of time bounds when this transaction
                will be valid.
              </TextSpan>

              <TextSpan>
                For regular transactions, it is highly recommended to set
                max_time to get a final result of a transaction in a defined
                time.
              </TextSpan>

              <Button className="mt-2 mb-5">Set to 5 minutes from now</Button>
            </div>
          </div>
        </Box>

        {[...Array(operationCount)].map((val, key) => (
          <Row index={key} key={key} />
        ))}

        <div className="col-md-9 pl-5 mt-2">
          <Button onClick={this.onAddOperation}>+ Add Operations</Button>
        </div>
      </Wrapper>
    );
  }
}
