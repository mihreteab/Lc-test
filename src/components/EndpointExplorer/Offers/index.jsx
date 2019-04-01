import React, { PureComponent } from 'react';

import Wrapper from '../../shared/Wrapper';
import Title from '../../shared/Title';
import ResourceTabs from '../ResourceTabs';

import OffersForAccounts from './OffersForAccount';

export default class Offers extends PureComponent {
  state = {};

  render() {
    return (
      <Wrapper className="col-lg-9 col-md-7 col-sm-12 col-xs-12">
        <Title>
          <p>SELECT A ENDPOINT</p>
          <ResourceTabs
            activeOption={true}
            onClick={this.onOptionChange}
            options="true"
          >
            Offers for Account
          </ResourceTabs>
        </Title>
        <OffersForAccounts />
      </Wrapper>
    );
  }
}
