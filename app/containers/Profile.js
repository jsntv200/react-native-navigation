import React from 'react';
import { connect } from 'react-redux';
import { authLogout } from '../logic/auth';
import Profile from '../screens/Profile';

const ProfileContainer = ({ authLogout, member }) =>
  <Profile member={member} onLogout={authLogout} />;

const mapStateToProps = ({ auth }) => ({
  member: auth.member,
});

const mapDispatchToProps = {
  authLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { authLogin, authLogout } from '../logic/auth';
// import Profile from '../screens/Profile';
//
// class ProfileContainer extends Component {
//   render() {
//     return <Profile member={this.props.member} onLogout={authLogin} />;
//   }
// }
//
// const mapStateToProps = ({ auth }) => ({
//   member: auth.member,
// });
//
// const mapDispatchToProps = {
//   authLogin,
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
