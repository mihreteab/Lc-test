import React, { PureComponent } from 'react';

import TextContainer from '../shared/TextContainer';
import Title from '../shared/Title';
import ResourceTabs from './ResourceTabs';

import Accounts from './Accounts/index';
import Assets from './Assets/index';
import Effects from './Effects/index';
import Ledger from './Ledger/index';
import Offers from './Offers/index';
import Operations from './Operations/index';
import OrderBook from './OrderBook';
import Paths from './Paths';
import Payments from './Payments';
import TradeAggregations from './TradeAggregations';
import Trades from './Trades';
import Transactions from './Transactions';

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
    selectedResource: 'Accounts',
  };

  onResourceChange = e => {
    this.setState({ selectedResource: e.target.textContent });
  };

  render() {
    const { selectedResource } = this.state;
    return (
      <div>
        <TextContainer className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          This tool can be used to run queries against the REST API endpoints on
          the Horizon server. Horizon is the client facing library for the
          Stellar ecosystem.
        </TextContainer>

        <div className="container-fluid">
          <div className="row col-lg-12 col-md-12">
            <Title className="col-lg-2 col-md-4 col-sm-12 col-xs-12">
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
              <Effects />
            ) : selectedResource === 'Ledger' ? (
              <Ledger />
            ) : selectedResource === 'Offers' ? (
              <Offers />
            ) : selectedResource === 'Operations' ? (
              <Operations />
            ) : selectedResource === 'Order Book' ? (
              <OrderBook />
            ) : selectedResource === 'Paths' ? (
              <Paths />
            ) : selectedResource === 'Payments' ? (
              <Payments />
            ) : selectedResource === 'Trade Aggregations' ? (
              <TradeAggregations />
            ) : selectedResource === 'Trades' ? (
              <Trades />
            ) : (
              <Transactions />
            )}
          </div>
        </div>
      </div>
    );
  }
}
