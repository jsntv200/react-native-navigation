import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';

import { memberValidate, selectMember } from './logic/member';
import httpClient from './config/http-client';
import Navigator from './config/router';
import store from './config/store';
import SignIn from './containers/SignIn';
import Loading from './screens/Splash';

// Connect react-navigation to our redux store
// Reference: https://reactnavigation.org/docs/guides/redux
class App extends Component {
  componentWillMount() {
    this.props.dispatch(memberValidate());
  }

  render() {
    const { dispatch, member, router } = this.props;

    if (member.loading) {
      return <Loading />;
    } else if (member.data.id) {
      return (
        <Navigator
          navigation={addNavigationHelpers({ dispatch, state: router })}
        />
      );
    } else {
      return <SignIn />;
    }
  }
}

const mapStateToProps = ({ router, member }) => ({ router, member });
const AppWithNavigation = connect(mapStateToProps)(App);

export default () =>
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>;
