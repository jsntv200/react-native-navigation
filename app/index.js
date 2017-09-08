import React from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import Navigator from './config/router';
import store from './config/store';

const App = ({ dispatch, router }) =>
  <Navigator navigation={addNavigationHelpers({ dispatch, state: router })} />;

const mapStateToProps = state => ({
  router: state.router,
});

const AppWithNavigation = connect(mapStateToProps)(App);

export default () =>
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>;
