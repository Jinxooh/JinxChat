import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from 'components/Profile/Profile';

const { ProfilePicture, ProfileName } = Profile;

class ProfileRoute extends Component {

  render() {
    const { status: { profile }} = this.props;
    return (
      <Profile>
        <ProfileName>{profile.get('displayName')}</ProfileName>
        <ProfilePicture thumbnail={profile.get('thumbnail')}></ProfilePicture>

      </Profile>
    );
  }
}

export default connect(
  state => ({
    status: {
      profile: state.base.auth.get('profile'),
    }
  }),
  dispatch => ({

  }),
)(ProfileRoute);