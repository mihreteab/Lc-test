import React, { PureComponent } from 'react';
import SearchBoxContainer from './SearchBoxContainer';
import NetworkStatusContainer from './NetworkStatus';

export default class LCNetExplorer extends PureComponent {
  state = {};

  render() {
    return (
      <div style={{ background: '#f0f5f9' }}>
        <SearchBoxContainer />
        <div style={{ padding: '48px 0px' }}>
          <NetworkStatusContainer />
        </div>
      </div>
    );
  }
}
