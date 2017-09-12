import React from 'react';
import { connect } from 'react-redux';
import { authLogin } from '../logic/auth';
import SignIn from '../screens/SignIn';

const mapStateToProps = ({ loading }) => ({ loading });

const mapDispatchToProps = { authLogin };

const SignInContainer = ({ authLogin, loading }) =>
  <SignIn email="" password="" loading={loading} onSubmit={authLogin} />;

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
