import React, { PureComponent } from 'react';

import Box from '../shared/Box';
import Wrapper from '../shared/Wrapper';
import InputContainerLarge from '../shared/InputContainerLarge';
import Span from '../shared/Span';
import ManageData from './ManageData';
import BumpSequence from './BumpSequence';
import SetOption from './SetOption';
import CreateAccount from './CreateAccount';
import SelectBox from './Select';
import OperationCountSpan from './OperationCountSpan';
import TextSpan from './TextSpan';

const Memo = ['None', 'Text', 'ID', 'Hash', 'Return'];

const Items = [
  {
    title: 'Create Account',
    subTitle:
      'Creates and funds a new account with the specified starting balance.',
  },
  {
    title: 'Payment',
    subTitle: 'Sends an amount in a specific asset to a destination account.',
  },
  {
    title: 'Path Payment',
    subTitle:
      'Sends an amount in a specific asset to a destination account through a path of offers. This allows the asset sent (e.g., 450 XLM) to be different from the asset received (e.g, 6 BTC).',
  },
  { title: 'Manage Offer', subTitle: 'Creates, updates, or deletes an offer.' },
  {
    title: 'Create Passive Offer',
    subTitle:
      'Creates an offer that does not take another offer of equal price when created.',
  },
  {
    title: 'Set Option',
    subTitle: 'Sets various configuration options for an account. ',
  },
  {
    title: 'Change Trust',
    subTitle: 'Creates, updates, or deletes a trustline.',
  },
  {
    title: 'Allow Trust',
    subTitle: 'Updates the authorized flag of an existing trustline.',
  },
  {
    title: 'Account Merge',
    subTitle:
      'Transfers the native balance (the amount of XLM an account holds) to another account and removes the source account from the ledger.',
  },
  { title: 'Inflation', subTitle: 'Runs the weekly inflation' },
  {
    title: 'Manage Data',
    subTitle: 'Sets, modifies, or deletes a Data Entry (name/value pair).',
  },
  { title: 'Bump Sequence', subTitle: 'Bumps sequence number.' },
];

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
                <div className="pl-5 col-md-9">
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
            <OperationCountSpan>{operationCount}</OperationCountSpan>
          </div>

          <div
            className="col-md-3"
            style={{
              margin: '30px',
            }}
          >
            <h3 className="font-weight-bold">OPERATION TYPE</h3>
          </div>

          <div className="col-md-6">
            <SelectBox items={Items} />
          </div>
        </div>

        <div
          className="col-md-9 ml-auto mr-auto"
          style={{
            margin: '30px',
          }}
        >
          <CreateAccount />
        </div>

        <div className="col-md-9 pl-5">
          <button
            type="button"
            style={{
              background: '#0084F8',
              borderRadius: '4px',
              padding: '15px',
              color: '#fff',
            }}
          >
            {'+  Add Operations'}
          </button>
        </div>
      </Wrapper>
    );
  }
}
