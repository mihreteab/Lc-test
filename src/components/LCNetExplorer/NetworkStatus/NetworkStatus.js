import React, { Component } from 'react';
import axios from 'axios'

import { IP_ADDRESS } from '../../utils/config'
import Background from '../../../../assets/media/images/back-map.png'
import { BlackTitle, NetworkStatusWrapper, NetworkStatusDataWrapper } from './SimpleComponents';

class NetworkStatus extends Component {
  state = {
    status: {}
  }

  componentWillMount() {
    axios.get(`${IP_ADDRESS}/v1/live/networkstatus`)
    .then(response => {
      this.setState({
        status: response.data.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    
    const { status : 
      { 
        networkState,
        protocolVersion, 
        lastLedger: { closedIn, sequence, closedAgo, averageLedgerLength } = {}
      } 
    } = this.state;

    return (
      <NetworkStatusWrapper>
        <div style={{backgroundImage:`url(${Background})`}}>
      
          <BlackTitle>LIVE NETWORK STATUS</BlackTitle>
          
          <NetworkStatusDataWrapper>
          {
            networkState == 'online' ? 'Up and running!' : 'Offline'
          }
          <br />
          Protocol Version: { protocolVersion }
          <br />
          Last Ledger: #{sequence} closed ~{closedAgo}s ago in {closedIn}s.
          <br />
          Average ledger close time in the last 200 ledgers: {averageLedgerLength}.
        

        </NetworkStatusDataWrapper>
        </div>
        </NetworkStatusWrapper>
    );
  }
}

export default NetworkStatus;
