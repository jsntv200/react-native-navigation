import React from 'react';
import { connect } from 'react-redux';
import { memberLogout, selectMember } from '../logic/member';
import Profile from '../screens/Profile';

const ProfileContainer = ({ member, memberLogout }) => (
  <Profile member={member} onLogout={memberLogout} />
);

const mapStateToProps = state => ({
  member: selectMember(state),
});

const mapDispatchToProps = {
  memberLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
