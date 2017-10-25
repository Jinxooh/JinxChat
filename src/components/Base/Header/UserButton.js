import React from 'react';

import { Image } from 'semantic-ui-react';

const UserButton = ({ thumbnail, onClick }) => {
  return (
    <div className="user-button">
      <Image 
        src={thumbnail}
        shape="circular"
        size="mini"
        onClick={onClick}/>
    </div>
  );
};

export default UserButton;