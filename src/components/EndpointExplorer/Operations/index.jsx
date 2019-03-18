import React, { PureComponent } from 'react';

import Wrapper from '../../shared/Wrapper';
import Title from '../../shared/Title';
import ResourceTabs from '../ResourceTabs';

import SingleOperations from './SingleOperations';
import OperationsForAccount from './OperationsForAccount';
import OperationsForLedger from './OperationsForLedger';
import OperationsForTransactions from './OperationsForTransactions';

const options = [
  'All Operations',
  'Single Operations',
  'Operations for Account',
  'Operations for Ledger',
  'Operations for Transaction',
];

export default class Operations extends PureComponent {
  state = {
    selectedOption: 'Single Operations',
  };

  onOptionChange = e => {
    this.setState({ selectedOption: e.target.textContent });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Wrapper>
        <Title>
          <p>SELECT A ENDPOINT</p>
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
          <h1>All Operations</h1>
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
