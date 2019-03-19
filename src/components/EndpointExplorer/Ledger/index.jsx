import React, { PureComponent } from 'react';

import Wrapper from '../../shared/Wrapper';
import Title from '../../shared/Title';
import ResourceTabs from '../ResourceTabs';

import SingleLedger from './SingleLedger';

const options = ['All Ledgers', 'Single Ledger'];

export default class Ledger extends PureComponent {
  state = {
    selectedOption: 'Single Ledger',
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
        {selectedOption === 'All Ledgers' ? (
          <h1>All Ledgers</h1>
        ) : (
          <SingleLedger />
        )}
      </Wrapper>
    );
  }
}