import React from 'react';
import { connect } from 'react-redux';
import { authLogin } from '../logic/auth';
import SignIn from '../screens/SignIn';

const mapDispatchToProps = {
  authLogin,
};

const SignInContainer = ({ authLogin }) => (
  <SignIn email="" password="" onSubmit={authLogin} />
);

export default connect(null, mapDispatchToProps)(SignInContainer);
