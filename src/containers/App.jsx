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
import { showAlert, login } from 'actions/index';

import Home from 'routes/Home';
import NotFound from 'routes/NotFound';

// import Header from 'components/Header';
import SystemAlerts from 'containers/SystemAlerts';

import GlobalStyles from 'components/GlobalStyles';
import RoutePublic from 'components/RoutePublic';
import RoutePrivate from 'components/RoutePrivate';

import LCNetLabs from '../components/LCNetLabs';
import Header from '../components/Header';
import About from '../components/About';
import Technology from '../components/Technology';
import LCNetExplorer from '../components/LCNetExplorer';
import Developer from '../components/Developer';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

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

const Wrapper = styled.div``;

export class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(login());
  }

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
    const { user } = this.props;
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
                    path="/about"
                    component={About}
                  />
                  <RoutePrivate
                    isAuthenticated={user.isAuthenticated}
                    path="/technology"
                    component={Technology}
                  />

                  <RoutePrivate
                    isAuthenticated={user.isAuthenticated}
                    path="/lc-net-lab"
                    component={LCNetLabs}
                  />

                  <RoutePrivate
                    isAuthenticated={user.isAuthenticated}
                    path="/lc-net-explorer"
                    component={LCNetExplorer}
                  />

                  <RoutePrivate
                    isAuthenticated={user.isAuthenticated}
                    path="/developer"
                    component={Developer}
                  />

                  <RoutePrivate
                    isAuthenticated={user.isAuthenticated}
                    path="/pricing"
                    component={Pricing}
                  />

                  <RoutePrivate
                    isAuthenticated={user.isAuthenticated}
                    path="/contact"
                    component={Contact}
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
