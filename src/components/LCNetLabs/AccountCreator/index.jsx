import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getKeypair } from 'actions/index';
import Wrapper from './Wrapper';
import Button from './Button';
import InputContainerLarge from '../../shared/InputContainerLarge';
import Title from './Title';
import DisplayKeys from './DisplayKeys';

export class AccountCreator extends PureComponent {
  state = {};

  static propTypes = {
    account: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  handleKeypair = () => {
    const { dispatch } = this.props;
    dispatch(getKeypair());
  };

  render() {
    const { account } = this.props;
    return (
      <Wrapper>
        <Wrapper>
          <Title>1. KEYPAIR GENERATOR</Title>
          <p
            style={{
              color: '#52616B',
            }}
          >
            These keypairs can be used on the LC Net network where one is
            required. For example, it can be used as an account master key,
            account signer, and/or <br /> as a stellar-core node key.{' '}
          </p>
          <Button onClick={this.handleKeypair}>Generate keypair</Button>
          {account.keypair.status === 'ready' && (
            <DisplayKeys keys={account.keypair.data} />
          )}
        </Wrapper>

        <Wrapper>
          <Title>2. FRIEND BOT: FUND A TEST NETWORK ACCOUNT</Title>
          <p
            style={{
              color: '#52616B',
            }}
          >
            These keypairs can be used on the LC Net network where one is
            required. For example, it can be used as an account master key,
            account signer, and/or
            <br /> as a stellar-core node key.
          </p>
          <div className="d-flex flex-column">
            <InputContainerLarge
              value="Example:
              GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
            <Button testNetwork={true}>Get Test Network Lumens</Button>
          </div>
        </Wrapper>
      </Wrapper>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { account: state.account };
}

export default connect(mapStateToProps)(AccountCreator);
