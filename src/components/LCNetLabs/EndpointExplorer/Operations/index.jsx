import React, { PureComponent } from 'react';

import Wrapper from '../../../shared/Wrapper';
import Title from '../../../shared/Title';
import ResourceTabs from '../ResourceTabs';

import SingleOperations from './SingleOperations';
import OperationsForAccount from './OperationsForAccount';
import OperationsForLedger from './OperationsForLedger';
import OperationsForTransactions from './OperationsForTransactions';
import AllOperations from './AllOperations';

const options = [
  'All Operations',
  'Single Operations',
  'Operations for Account',
  'Operations for Ledger',
  'Operations for Transaction',
];

export default class Operations extends PureComponent {
  state = {
    selectedOption: 'All Operations',
  };

  onOptionChange = e => {
    this.setState({ selectedOption: e.target.textContent });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Wrapper className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
        <Title>
          <p
            style={{
              fontSize: '18px',
            }}
          >
            SELECT A ENDPOINT
          </p>
          {options.map(option => {
            return (
              <ResourceTabs
                activeOption={selectedOption === option ? true : false}
                onClick={this.onOptionChange}
                key={option}
                options="true"
              >
                {option}
              </ResourceTabs>
            );
          })}
        </Title>
        {selectedOption === 'All Operations' ? (
          <AllOperations />
        ) : selectedOption === 'Single Operations' ? (
          <SingleOperations />
        ) : selectedOption === 'Operations for Account' ? (
          <OperationsForAccount />
        ) : selectedOption === 'Operations for Ledger' ? (
          <OperationsForLedger />
        ) : (
          <OperationsForTransactions />
        )}
      </Wrapper>
    );
  }
}
