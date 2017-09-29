import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import { memberFetch } from '../logic/member';
import Navigator from '../config/router';
import SignIn from './SignIn';

// Connect react-navigation to our redux store
// Reference: https://reactnavigation.org/docs/guides/redux
class App extends Component {
  componentWillMount() {
    this.props.dispatch(memberFetch());
  }

  render() {
    const { dispatch, member, router } = this.props;

    if (member.data.id) {
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

export default connect(mapStateToProps)(App);
