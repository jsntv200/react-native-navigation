import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';

import Navigator from './config/router';
import store from './config/store';

const hasAccess = false;

// Create App linking navigation to our redux store
const App = ({ dispatch, router }) => {
  const navigateTo = routeName => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    });

    dispatch(resetAction);
  };

  if (!hasAccess) {
    setTimeout(() => {
      hasAccess = true;
      navigateTo('Tabs');
    }, 5000);
  }

  return (
    <Navigator navigation={addNavigationHelpers({ dispatch, state: router })} />
  );
};

// Map the redux state.router to the to props
const mapStateToProps = ({ router }) => ({ router });

// Connect the router props to App
const AppWithNavigation = connect(mapStateToProps)(App);

export default () =>
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>;
