import React, { PureComponent } from 'react';

import Wrapper from '../../../shared/Wrapper';
import Title from '../../../shared/Title';
import ResourceTabs from '../ResourceTabs';

import FindPaymentPaths from './FindPaymentPaths';

export default class Paths extends PureComponent {
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
            Find Payment Paths
          </ResourceTabs>
        </Title>
        <FindPaymentPaths />
      </Wrapper>
    );
  }
}
