import React, { PureComponent } from 'react';

import Wrapper from '../../shared/Wrapper';
import Title from '../../shared/Title';
import ResourceTabs from '../ResourceTabs';

import OperationsForAccount from './PaymentsForAccount';
import OperationsForLedger from './PaymentsForLedger';
import OperationsForTransactions from './PaymentsForTransactions';
import AllPayments from './AllPayments';

const options = [
  'All Payments',
  'Payments for Account',
  'Payments for Ledger',
  'Payments for Transaction',
];

export default class Payments extends PureComponent {
  state = {
    selectedOption: 'All Payments',
  };

  onOptionChange = e => {
    this.setState({ selectedOption: e.target.textContent });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Wrapper className="col-lg-9 col-md-7 col-sm-12 col-xs-12">
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
        {selectedOption === 'All Payments' ? (
          <AllPayments />
        ) : selectedOption === 'Payments for Account' ? (
          <OperationsForAccount />
        ) : selectedOption === 'Payments for Ledger' ? (
          <OperationsForLedger />
        ) : (
          <OperationsForTransactions />
        )}
      </Wrapper>
    );
  }
}
