import React, { Fragment, Component } from 'react';
import Link from 'react-router-dom/Link';

import EndpointExplorer from './EndpointExplorer/index';
import AccountCreator from './AccountCreator/index';
import TransactionBuilder from './TransactionBuilder/index';
import TransactionSigner from './TransactionSigner/index';
import Laboratorys from './Laboratory/index';

import NameWrapper from './NameWrapper';
import NameContainer from './NameContainer';
import Title from './Title';
import TitleStrongText from './TitleStrongText';
import ToggleButton from './ToggleButton';
import ToggleWrapper from './ToggleWrapper';
import NavWrapper from './NavWrapper';
import Tabs from './Tabs';

const NavTabs = [
  'LABORATORY',
  'ACCOUNT CREATOR',
  'ENDPOINT EXPLORER',
  'TRANSACTION BUILDER',
  'TRANSACTION SIGNER',
  'XRD VIEWER',
];

const networks = ['TEST', 'PUBLIC'];

export default class LCNetLabs extends Component {
  state = {
    selectedLabel: 'LABORATORY',
    active: true,
    selectedNetwork: 'TEST',
  };

  onSelectLabel = e => {
    const value = e.target.textContent;
    this.setState({ selectedLabel: value });
  };

  onClickToggle = e => {
    this.setState({ selectedNetwork: e.target.textContent });
  };

  render() {
    const { selectedLabel, selectedNetwork } = this.state;
    return (
      <Fragment>
        <div className="mx-5">
          <NameWrapper>
            <NameContainer>
              <Title>
                <TitleStrongText>LC NET</TitleStrongText> | Network laboratory
              </Title>
            </NameContainer>

            <ToggleWrapper>
              {networks.map(network => (
                <ToggleButton
                  key={network}
                  active={selectedNetwork === network ? true : false}
                  onClick={this.onClickToggle}
                >
                  {network}
                </ToggleButton>
              ))}
            </ToggleWrapper>
          </NameWrapper>
        </div>

        <div className="">
          <NavWrapper>
            {NavTabs.map(key => {
              return (
                <Tabs
                  isSelect={selectedLabel === key ? true : false}
                  key={key}
                  onClick={this.onSelectLabel}
                >
                  {key}
                </Tabs>
              );
            })}
          </NavWrapper>
        </div>
        {selectedLabel === 'LABORATORY' && <Laboratorys />}
        {selectedLabel === 'ACCOUNT CREATOR' && <AccountCreator />}
        {selectedLabel === 'ENDPOINT EXPLORER' && <EndpointExplorer />}
        {selectedLabel === 'TRANSACTION BUILDER' && <TransactionBuilder />}
        {selectedLabel === 'TRANSACTION SIGNER' && <TransactionSigner />}
        {selectedLabel === 'XRD VIEWER' && <></>}
      </Fragment>
    );
  }
}
