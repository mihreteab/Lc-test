import React, { Component } from 'react';
import axios from 'axios';

import Ledger from './Ledger';
import { IP_ADDRESS } from '../../utils/config'
import {BlueTitle, ListContainer, FooterContainer, Modifiedbutton, TitleContainer} from './SimpleComponents'

class LatestNetworkLedger extends Component {
  state = {
    ledgers : []
  }

  componentWillMount() {
    axios.get(`${IP_ADDRESS}/v1/live/latestledgers/8`)
    .then(response => {this.setState({
      ledgers : response.data.data.ledgers.records})
    })
  }

  render() {
    const { ledgers } = this.state;
    return (
      <div>
        <TitleContainer>
          <BlueTitle>Live Network Latest Ledgers</BlueTitle>
        </TitleContainer> 
          <ListContainer>
          {
            ledgers.map((ledger) => <Ledger hash={ledger.hash} timeStamp={ledger.closed_at}/>)
          }
          </ListContainer>
          <FooterContainer>
            <Modifiedbutton>View All Ledgers</Modifiedbutton>
          </FooterContainer>
        
      </div>
    );
  }
}
export default LatestNetworkLedger;
