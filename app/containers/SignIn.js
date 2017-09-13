import React from 'react';
import { connect } from 'react-redux';
import { memberLogin } from '../logic/member';
import SignIn from '../screens/SignIn';

const mapStateToProps = ({ loading }) => ({ loading });

const mapDispatchToProps = { memberLogin };

const SignInContainer = ({ memberLogin, loading }) =>
  <SignIn email="" password="" loading={loading} onSubmit={memberLogin} />;

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
