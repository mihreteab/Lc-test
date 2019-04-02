import React, { Fragment, Component } from 'react';
import Link from 'react-router-dom/Link';

import EndpointExplorer from '../EndpointExplorer';
import AccountCreator from '../AccountCreator';
import TransactionBuilder from '../TransactionBuilder';
import TransactionSigner from '../TransactionSigner';
import Laboratorys from '../Laboratory';

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

export default class LCNetLabs extends Component {
  state = {
    selectedLabel: 'LABORATORY',
    active: true,
  };

  onSelectLabel = e => {
    const value = e.target.textContent;
    this.setState({ selectedLabel: value });
  };

  render() {
    const { active, selectedLabel } = this.state;
    return (
      <Fragment>
        <NameWrapper>
          <NameContainer>
            <Title>
              <TitleStrongText>LC NET</TitleStrongText> | Network laboratory
            </Title>
          </NameContainer>

          <ToggleWrapper>
            <ToggleButton active={active}>TEST</ToggleButton>
            <ToggleButton
              style={{
                color: '#000',
              }}
            >
              PUBLIC
            </ToggleButton>
          </ToggleWrapper>
        </NameWrapper>

        <div className="">
          <NavWrapper>
            {NavTabs.map(key => {
              const link = key
                .toLowerCase()
                .split(' ')
                .join('-');

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
