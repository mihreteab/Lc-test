import React, { PureComponent } from 'react';

import TextContainer from './TextContainer';
import Title from '../shared/Title';
import ResourceTabs from './ResourceTabs';

import Accounts from './Accounts/index';
import Assets from './Assets/index';

const Resources = [
  'Accounts',
  'Assets',
  'Effects',
  'Ledger',
  'Offers',
  'Operations',
  'Order Book',
  'Paths',
  'Payments',
  'Trade Aggregations',
  'Trades',
  'Transactions',
];

export default class EndpointExplorer extends PureComponent {
  state = {
    selectedResource: 'Assets',
    active: true,
  };

  onResourceChange = e => {
    this.setState({ selectedResource: e.target.textContent });
  };

  render() {
    const { selectedResource } = this.state;
    return (
      <div>
        <TextContainer>
          This tool can be used to run queries against the REST API endpoints on
          the Horizon server. Horizon is the client facing library for the
          Stellar ecosystem.
        </TextContainer>

        <div>
          <div className="d-flex">
            <Title>
              <p>1. SELECT A RESOURCE</p>
              {Resources.map(resource => {
                return (
                  <ResourceTabs
                    active={selectedResource === resource ? true : false}
                    onClick={this.onResourceChange}
                    key={resource}
                  >
                    {resource}
                  </ResourceTabs>
                );
              })}
            </Title>
            {selectedResource === 'Accounts' ? (
              <Accounts />
            ) : selectedResource === 'Assets' ? (
              <Assets />
            ) : selectedResource === 'Effects' ? (
              <h1>Effects</h1>
            ) : selectedResource === 'Ledger' ? (
              <h1>Ledger</h1>
            ) : selectedResource === 'Offers' ? (
              <h1>Offers</h1>
            ) : selectedResource === 'Operations' ? (
              <h1>Operations</h1>
            ) : selectedResource === 'Order Book' ? (
              <h1>Order Book</h1>
            ) : selectedResource === 'Paths' ? (
              <h1>Paths</h1>
            ) : selectedResource === 'Payments' ? (
              <h1>Payments</h1>
            ) : selectedResource === 'Trade Aggregations' ? (
              <h1>Trade Aggregations</h1>
            ) : selectedResource === 'Trades' ? (
              <h1>Trades</h1>
            ) : selectedResource === 'Transactions' ? (
              <h1>Transactions</h1>
            ) : (
              <h1>Not Found</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}
