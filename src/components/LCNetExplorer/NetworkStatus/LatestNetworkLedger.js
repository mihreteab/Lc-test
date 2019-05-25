import React, { Component } from 'react';
import Ledger from './Ledger';

class LatestNetworkLedger extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: '615px',
            height: '65px',
            background: '#fff',
            padding: '15px 0 15px 22px',
            borderBottom: '2px solid #F0F5F9 ',
          }}
        >
          <h4>Live Network Latest Ledgers</h4>
        </div>
        <div style={{ padding: '38px 0 0 0' }}>
          <Ledger />
        </div>
      </div>
    );
  }
}
export default LatestNetworkLedger;
