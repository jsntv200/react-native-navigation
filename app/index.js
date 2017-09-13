import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';

import { memberValidate } from './logic/member';
import httpClient from './config/http-client';
import Navigator from './config/router';
import store from './config/store';

// Connect react-navigation to our redux store
// Reference: https://reactnavigation.org/docs/guides/redux
class App extends Component {
  componentWillMount() {
    this.props.dispatch(memberValidate());
  }

  render() {
    return (
      <Navigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.router,
        })}
      />
    );
  }
}

const mapStateToProps = ({ router }) => ({ router });
const AppWithNavigation = connect(mapStateToProps)(App);

export default () =>
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>;
