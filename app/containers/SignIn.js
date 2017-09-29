import React from 'react';
import { connect } from 'react-redux';
import { memberLogin } from '../logic/member';
import SignIn from '../screens/SignIn';
import { connectAlert } from '../components/Alert';

const mapStateToProps = ({ member }) => ({ member });
const mapDispatchToProps = { memberLogin };

const SignInContainer = ({ member, memberLogin }) => {
  return (
    <SignIn
      email=""
      password=""
      loading={member.loading}
      onSubmit={memberLogin}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(
  connectAlert(SignInContainer)
);
