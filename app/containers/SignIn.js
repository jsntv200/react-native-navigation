import React from 'react';
import { connect } from 'react-redux';
import { authLogin } from '../logic/auth';
import SignIn from '../screens/SignIn';

const SignInContainer = ({ authLogin, loading }) => (
  <SignIn email="" password="" loading={loading} onSubmit={authLogin} />
);

const mapStateToProps = ({ loading }) => {
  return {
    loading,
  };
};

const mapDispatchToProps = {
  authLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
