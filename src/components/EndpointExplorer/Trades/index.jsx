import React, { PureComponent } from 'react';

import Wrapper from '../../shared/Wrapper';
import Title from '../../shared/Title';
import ResourceTabs from '../ResourceTabs';

import TradesForAccount from './TradesForAccount';
import AllTrades from './AllTrades';
import TradesForOffer from './TradesForOffer';

const options = ['All Trades', 'Trades for Account', 'Trades for Offer'];

export default class Trades extends PureComponent {
  state = {
    selectedOption: 'All Trades',
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
        {selectedOption === 'All Trades' ? (
          <AllTrades />
        ) : selectedOption === 'Trades for Account' ? (
          <TradesForAccount />
        ) : (
          <TradesForOffer />
        )}
      </Wrapper>
    );
  }
}
