import React, { PureComponent } from 'react';

import Wrapper from '../../../shared/Wrapper';
import Title from '../../../shared/Title';
import ResourceTabs from '../ResourceTabs';

import AllTransactions from './AllTransactions';
import SingleTransaction from './SingleTransaction';
import PostTransaction from './PostTransaction';
import TransactionsForAccount from './TransactionsForAccount';
import TransactionsForLedger from './TransactionsForLedger';

const options = [
  'All Transactions',
  'Single Transaction',
  'Post Transaction',
  'Transactions for Account',
  'Transactions for Ledger',
];

export default class Transactions extends PureComponent {
  state = {
    selectedOption: 'All Transactions',
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
        {selectedOption === 'All Transactions' ? (
          <AllTransactions />
        ) : selectedOption === 'Single Transaction' ? (
          <SingleTransaction />
        ) : selectedOption === 'Post Transaction' ? (
          <PostTransaction />
        ) : selectedOption === 'Transactions for Account' ? (
          <TransactionsForAccount />
        ) : (
          <TransactionsForLedger />
        )}
      </Wrapper>
    );
  }
}
