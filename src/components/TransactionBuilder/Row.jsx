import React, { Component } from 'react';

import SelectBoxWrapper from './SelectBoxWrapper';
import SelectBoxContainer from './SelectBoxContainer';
import SelectedItem from './SelectedItem';
import Arrow from './Arrow';
import ArrowDir from './ArrowDir';
import Item from './Item';

import ManageData from './ManageData';
import BumpSequence from './BumpSequence';
import SetOption from './SetOption';
import CreateAccount from './CreateAccount';
import Payment from './Payment';
import PathPayment from './PathPayment';
import ManageOffer from './ManageOffer';
import CreatePassiveOffer from './CreatePassiveOffer';
import ChangeTrust from './ChangeTrust';
import AllowTrust from './AllowTrust';
import AccountMerge from './AccountMerge';
import Inflation from './Inflation';

import OperationCountSpan from './OperationCountSpan';
import TextSpan from './TextSpan';
import DivWrapper from './DivWrapper';
import ItemWrapper from './ItemWrapper';
import CenterDiv from './CenterDiv';
import MenuWrapper from './MenuWrapper';

const items = [
  {
    title: 'Create Account',
    subTitle:
      'Creates and funds a new account with the specified starting balance.',
  },
  {
    title: 'Payment',
    subTitle: 'Sends an amount in a specific asset to a destination account.',
  },
  {
    title: 'Path Payment',
    subTitle:
      'Sends an amount in a specific asset to a destination account through a path of offers. This allows the asset sent (e.g., 450 XLM) to be different from the asset received (e.g, 6 BTC).',
  },
  { title: 'Manage Offer', subTitle: 'Creates, updates, or deletes an offer.' },
  {
    title: 'Create Passive Offer',
    subTitle:
      'Creates an offer that does not take another offer of equal price when created.',
  },
  {
    title: 'Set Option',
    subTitle: 'Sets various configuration options for an account. ',
  },
  {
    title: 'Change Trust',
    subTitle: 'Creates, updates, or deletes a trustline.',
  },
  {
    title: 'Allow Trust',
    subTitle: 'Updates the authorized flag of an existing trustline.',
  },
  {
    title: 'Account Merge',
    subTitle:
      'Transfers the native balance (the amount of XLM an account holds) to another account and removes the source account from the ledger.',
  },
  { title: 'Inflation', subTitle: 'Runs the weekly inflation' },
  {
    title: 'Manage Data',
    subTitle: 'Sets, modifies, or deletes a Data Entry (name/value pair).',
  },
  { title: 'Bump Sequence', subTitle: 'Bumps sequence number.' },
];

class Row extends Component {
  state = {
    selectedItem: items[0],
    showItems: true,
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems,
    }));
  };

  selectItem = item => {
    this.setState({
      selectedItem: item,
      showItems: true,
    });
  };

  render() {
    const { index: key } = this.props;
    const { selectedItem, showItems } = this.state;
    return (
      <div key={key}>
        <DivWrapper>
          <CenterDiv className="col-md-1">
            <OperationCountSpan>{(key + 1).toString()}</OperationCountSpan>
          </CenterDiv>

          <CenterDiv className="col-md-3" marginRight={true}>
            <h3 className="font-weight-bold">OPERATION TYPE</h3>
          </CenterDiv>

          <CenterDiv
            className="col-md-7"
            minHeight={true}
            style={{
              marginLeft: '0.5%',
            }}
          >
            <SelectBoxWrapper>
              <SelectBoxContainer>
                <SelectedItem>{selectedItem.title}</SelectedItem>
                <Arrow onClick={this.dropDown}>
                  {showItems ? (
                    <ArrowDir down="true" />
                  ) : (
                    <ArrowDir up="true" />
                  )}
                </Arrow>
              </SelectBoxContainer>

              <ItemWrapper show={showItems}>
                {items.map(item => (
                  <Item
                    key={item.title}
                    onClick={() => this.selectItem(item)}
                    selected={selectedItem === item ? 'true' : ''}
                  >
                    {item.title}
                  </Item>
                ))}
              </ItemWrapper>
              <TextSpan className="mt-2" top="65px">
                {selectedItem.subTitle}
              </TextSpan>
              <TextSpan className="mt-2" top="100px">
                {'See documentation for Create Account'}
              </TextSpan>
            </SelectBoxWrapper>
          </CenterDiv>
        </DivWrapper>

        <MenuWrapper>
          {selectedItem.title === 'Create Account' ? (
            <CreateAccount />
          ) : selectedItem.title === 'Payment' ? (
            <Payment />
          ) : selectedItem.title === 'Path Payment' ? (
            <PathPayment />
          ) : selectedItem.title === 'Manage Offer' ? (
            <ManageOffer />
          ) : selectedItem.title === 'Create Passive Offer' ? (
            <CreatePassiveOffer />
          ) : selectedItem.title === 'Set Option' ? (
            <SetOption />
          ) : selectedItem.title === 'Change Trust' ? (
            <ChangeTrust />
          ) : selectedItem.title === 'Allow Trust' ? (
            <AllowTrust />
          ) : selectedItem.title === 'Account Merge' ? (
            <AccountMerge />
          ) : selectedItem.title === 'Inflation' ? (
            <Inflation />
          ) : selectedItem.title === 'Manage Data' ? (
            <ManageData />
          ) : (
            <BumpSequence />
          )}
        </MenuWrapper>
      </div>
    );
  }
}

export default Row;
