import React from 'react';
import { Segment } from 'semantic-ui-react';
import ProfilePicture from './ProfilePicture';
import ProfileName from './ProfileName';

const Profile = ({ children}) => {
  return (
    <Segment className='profile-wrapper'>
      { children }
    </Segment>
  );
};

Profile.ProfilePicture = ProfilePicture;
Profile.ProfileName = ProfileName;
export default Profile;