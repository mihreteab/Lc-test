import React, { Component } from 'react';

class NetworkStatus extends Component {
  render() {
    return (
      <div
        style={{
          border: '1px solid',
          height: '208px',
          width: '613px',
          background: '#fff',
          padding: '25px 23px',
        }}
      >
        <h4
          style={{
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '34px',
            textTransform: 'uppercase',
            color: '#52616B',
            marginBottom: '29px',
          }}
        >
          LIVE NETWORK STATUS
        </h4>
        <div
          style={{
            fontWeight: '400',
            fontSize: '13px',
            lineLeight: '22px',
            color: '#52616B',
          }}
        >
          Up and running!
          <br />
          Protocol Version: 10
          <br />
          Last Ledger: #22903386 closed ~5s ago in 5s.
          <br />
          Average ledger close time in the last 200 ledgers: 5.56s.
        </div>
      </div>
    );
  }
}

export default NetworkStatus;
