import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled, { css, ThemeProvider } from 'styled-components';
import treeChanges from 'tree-changes';

import history from 'modules/history';
import theme, { headerHeight } from 'modules/theme';
import { utils } from 'styled-minimal';

import config from 'config';
import { showAlert } from 'actions/index';

import Home from 'routes/Home';
import NotFound from 'routes/NotFound';

// import Header from 'components/Header';
import SystemAlerts from 'containers/SystemAlerts';

import GlobalStyles from 'components/GlobalStyles';
import RoutePublic from 'components/RoutePublic';
import RoutePrivate from 'components/RoutePrivate';

import EndpointExplorer from '../components/EndpointExplorer';
import Laboratory from '../components/Laboratory';
import AccountCreator from '../components/AccountCreator';
import Header from '../components/Header';
import TransactionBuilder from '../components/TransactionBuilder';
import TransactionSigner from '../components/TransactionSigner';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  opacity: 1 !important;
  position: relative;
  transition: opacity 0.5s;
`;

const MainPrivate = ({ isAuthenticated }) => isAuthenticated && css``;

const Main = styled.main`
  ${MainPrivate};
`;

const Wrapper = styled.div`
  margin-top: 280px;
`;

export class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    const { changedTo } = treeChanges(this.props, nextProps);

    /* istanbul ignore else */
    if (changedTo('user.isAuthenticated', true)) {
      dispatch(
        showAlert('Hello! And welcome!', {
          variant: 'success',
          icon: 'bell',
        }),
      );
    }
  }

  render() {
    // const { dispatch, user } = this.props;
    const { user } = this.props;
    user.isAuthenticated = true;
    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <AppWrapper logged={user.isAuthenticated}>
            <Helmet
              defer={false}
              htmlAttributes={{ lang: 'pt-br' }}
              encodeSpecialCharacters={true}
              defaultTitle={config.title}
              titleTemplate={`%s | ${config.name}`}
              titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
            />
            {/* {user.isAuthenticated && <Header dispatch={dispatch} user={user} />} */}
            <Main isAuthenticated={user.isAuthenticated}>
              <Header />
              <Wrapper>
                <Switch>
                  <RoutePublic
                    isAuthenticated={user.isAuthenticated}
                    path="/"
                    exact
                    component={Home}
                  />
                  <RoutePrivate
                    isAuthenticated={user.isAuthenticated}
                    path="/laboratory"
                    component={Laboratory}
                  />
                  <RoutePrivate
                    isAuthenticated={user.isAuthenticated}
                    path="/account-creator"
                    component={AccountCreator}
                  />
                  <RoutePrivate
                    isAuthenticated={user.isAuthenticated}
                    path="/endpoint-explorer"
                    component={EndpointExplorer}
                  />

                  <RoutePrivate
                    isAuthenticated={user.isAuthenticated}
                    path="/transaction-builder"
                    component={TransactionBuilder}
                  />

                  <RoutePrivate
                    isAuthenticated={user.isAuthenticated}
                    path="/transaction-signer"
                    component={TransactionSigner}
                  />

                  <Route component={NotFound} />
                </Switch>
              </Wrapper>
            </Main>
            <SystemAlerts />
            <GlobalStyles />
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default hot(connect(mapStateToProps)(App));
