import React, { PureComponent } from 'react';

import Wrapper from '../../shared/Wrapper';
import Title from '../../shared/Title';
import ResourceTabs from '../ResourceTabs';

import Details from './FindPaymentPaths';

export default class Paths extends PureComponent {
  state = {};

  render() {
    return (
      <Wrapper>
        <Title>
          <p>SELECT A ENDPOINT</p>
          <ResourceTabs
            activeOption={true}
            onClick={this.onOptionChange}
            options="true"
          >
            Find Payment Paths
          </ResourceTabs>
        </Title>
        <Details />
      </Wrapper>
    );
  }
}
