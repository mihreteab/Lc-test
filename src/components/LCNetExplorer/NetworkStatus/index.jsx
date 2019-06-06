import React, { Component } from 'react';
import styled from 'styled-components';

import NetworkStatus from './NetworkStatus';
import LatestNetworkLedger from './LatestNetworkLedger';
import ValidatorsNetworkNode from './ValidatorsNetworkNode';
import NetworkAssetContainer from './NetworkAssetContainer';
import LatestNetworkTransaction from './LatestNetworkTransaction';
import TestNetworkAsset from './TestNetworkAsset';
import TotalLions from './TotalLions';
import LionsInSerculation from './LionsInSerculation';
import RecentOperationLiveNetwork from './RecentOperationLiveNetwork';
import RecentOperationTestNetwork from './RecentOperationTestNetwork';
import NetworkHistory from './NetworkHistory';
import TestNetworkStatus from './TestNetworkStatus';
import TestNetworkHistory from './TestNetworkHistory'
import Footer  from './Footer';

const NetworkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 24px 0;
`;

class NetworkStatusContainer extends Component {
  render() {
    return (
      <div className="mx-5">
        <NetworkWrapper>
          <NetworkStatus />
          <NetworkHistory />
        </NetworkWrapper>
        <NetworkWrapper>
          <LatestNetworkLedger />
          <LatestNetworkTransaction />
        </NetworkWrapper>
        <NetworkWrapper>
          <TestNetworkStatus />
          <TestNetworkHistory />
        </NetworkWrapper>
        <ValidatorsNetworkNode />
        <NetworkWrapper>
        <NetworkAssetContainer />
        <TestNetworkAsset />
        </NetworkWrapper>
        <NetworkWrapper>
          <TotalLions />
          <LionsInSerculation />
        </NetworkWrapper>
        <NetworkWrapper>
          <RecentOperationLiveNetwork />
          <RecentOperationTestNetwork />
        </NetworkWrapper>
        <Footer></Footer>
      </div>
    );
  }
}
export default NetworkStatusContainer;
