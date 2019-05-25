import React, { Component } from 'react';
import NetworkStatus from './NetworkStatus';
import LatestNetworkLedger from './LatestNetworkLedger';

class NetworkStatusContainer extends Component {
  render() {
    return (
      <div className="mx-5">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <NetworkStatus />
          <NetworkStatus />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <LatestNetworkLedger />
          <LatestNetworkLedger />
        </div>
      </div>
    );
  }
}
export default NetworkStatusContainer;
