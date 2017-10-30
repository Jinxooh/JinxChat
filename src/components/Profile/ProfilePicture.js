import React from 'react';

import { Image } from 'semantic-ui-react';

const ProfilePicture = ({ thumbnail, onClick }) => {
  return (
    <div className="profile-thumbnail">
      <Image 
        src={thumbnail}
        shape="circular"
        size="tiny"
        onClick={onClick}/>
    </div>
  );
};

export default ProfilePicture;