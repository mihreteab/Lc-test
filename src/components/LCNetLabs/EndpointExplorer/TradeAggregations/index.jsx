import React, { PureComponent } from 'react';

import Wrapper from '../../../shared/Wrapper';
import Title from '../../../shared/Title';
import ResourceTabs from '../ResourceTabs';

import Trade from './Trade';

export default class TradeAggregations extends PureComponent {
  state = {};

  render() {
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
          <ResourceTabs
            activeOption={true}
            onClick={this.onOptionChange}
            options="true"
          >
            Trade Aggregations
          </ResourceTabs>
        </Title>
        <Trade />
      </Wrapper>
    );
  }
}
