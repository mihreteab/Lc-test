import React, { Component } from 'react';
import axios from 'axios';

import Transaction from './Transaction';
import { IP_ADDRESS } from '../../utils/config'
import { BlueTitle, FooterContainer, Modifiedbutton, TitleContainer, ListContainer } from './SimpleComponents';

class LatestNetworkTransaction extends Component {
  state = {
    transactions : []
  }

  componentWillMount() {
    axios.get(`${IP_ADDRESS}/v1/live/latesttransactions/8`)
    .then(response => {this.setState({
      transactions : response.data.data})
    })
  }

  render() {

    const { transactions } = this.state;

    return (
      <div>
        <TitleContainer>
          <BlueTitle>Live Network Latest Transactions</BlueTitle>
        </TitleContainer>
        <ListContainer>
          {
            transactions.map((transaction) => <Transaction hash={transaction.hash} amount={transaction.fee_paid}/>)
          }
        </ListContainer>
        <FooterContainer>
            <Modifiedbutton>View All Transactions</Modifiedbutton>
        </FooterContainer>
      </div>
    );
  }
}
export default LatestNetworkTransaction;
