// @format
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import treeChanges from 'tree-changes';
import { getKeypair, testFriendBot, showAlert } from 'actions/index';
import { STATUS } from 'constants/index';
import Wrapper from './Wrapper';
import Button from './Button';
import InputContainerLarge from '../../shared/InputContainerLarge';
import Banner from '../../shared/Banner';
import Title from './Title';
import DisplayKeys from './DisplayKeys';

export class AccountCreator extends PureComponent {
  state = { friendBotInput: '' };

  divRef = React.createRef();

  static propTypes = {
    account: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.account.friendBot.status !== this.props.account.friendBot.status
    ) {
      this.divRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    const { changedTo } = treeChanges(this.props, nextProps);

    if (changedTo('account.keypair.status', STATUS.ERROR)) {
      dispatch(
        showAlert(nextProps.account.keypair.message, { variant: 'danger' }),
      );
    }
  }

  handleKeypair = () => {
    const { dispatch } = this.props;
    dispatch(getKeypair());
  };

  handleFriendBot = () => {
    const { dispatch } = this.props;
    const { friendBotInput } = this.state;
    dispatch(testFriendBot(friendBotInput));
  };

  render() {
    const { account } = this.props;
    const { friendBotInput } = this.state;
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
          {account.keypair.status === STATUS.READY && (
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
              value={friendBotInput}
              onChange={({ target }) =>
                this.setState({ friendBotInput: target.value })
              }
              placeholder="Example:
              GCEXAMPLE5HWNK4AYSTEQ4UWDKHTCKADVS2AHF3UI2ZMO3DPUSM6Q4UG"
            />
            <Button
              disabled={friendBotInput === ''}
              onClick={this.handleFriendBot}
              testNetwork={true}
            >
              Get Test Network Lumens
            </Button>
            <div ref={this.divRef}>
              {account.friendBot.status === STATUS.RUNNING && (
                <Banner loading>Loading...</Banner>
              )}
              {account.friendBot.status === STATUS.READY && (
                <Banner>{account.friendBot.data}</Banner>
              )}
              {account.friendBot.status === STATUS.ERROR && (
                <Banner error>{account.friendBot.message}</Banner>
              )}
            </div>
          </div>
        </Wrapper>
      </Wrapper>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  console.log(state);
  return { account: state.account };
}

export default connect(mapStateToProps)(AccountCreator);
