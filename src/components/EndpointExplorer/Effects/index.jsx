import React, { PureComponent } from 'react';

import Wrapper from '../../shared/Wrapper';
import Title from '../../shared/Title';
import ResourceTabs from '../ResourceTabs';

import AllEffects from './AllEffects';
import EffectsForAccounts from './EffectsForAccount';
import EffectsForLedger from './EffectsForLedger';
import EffectsForOperations from './EffectsForOperations';
import EffectsForTransactions from './EffectsForTransaction';

const options = [
  'All Effects',
  'Effects for Account',
  'Effects for Ledger',
  'Effects for Operations',
  'Effects for Transaction',
];

export default class Effects extends PureComponent {
  state = {
    selectedOption: 'All Effects',
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
        {selectedOption === 'All Effects' ? (
          <AllEffects />
        ) : selectedOption === 'Effects for Account' ? (
          <EffectsForAccounts />
        ) : selectedOption === 'Effects for Ledger' ? (
          <EffectsForLedger />
        ) : selectedOption === 'Effects for Operations' ? (
          <EffectsForOperations />
        ) : (
          <EffectsForTransactions />
        )}
      </Wrapper>
    );
  }
}
