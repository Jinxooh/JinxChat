import React from 'react';
import { Icon } from 'semantic-ui-react';
import EyeCatchy from 'components/Common/EyeCatchy';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const UserMenu = ({ displayName, visible, onHide, handleUserMenu }) => {
  return (
    <div>
    <ReactCSSTransitionGroup
      transitionName={{
        enter: 'flipInX',
        leave: 'flipOutX',
      }}
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
    >
      {
        visible && (
          <EyeCatchy onHide={onHide}>
            <div className="user-menu-wrapper">
              <div className="user-menu">
                <div className="menu-item" onClick={handleUserMenu.moveToProfile}>
                  <div className="menu-name">
                    <Icon name="user" /><span>{displayName}</span>
                  </div>
                  <div className="description">view <b>Profile</b></div>
                </div>
                <div className="menu-item" onClick={handleUserMenu.moveToSetting}>
                  <div className="menu-name">
                  <Icon name="setting" /><span>Settings</span>
                </div>
                </div>
                <div className="menu-item" onClick={handleUserMenu.logout}>
                  <div className="menu-name">
                    <Icon name="power" /><span>Sign out</span>
                  </div>
                </div>
              </div>
            </div>
          </EyeCatchy>
        )
      }
    </ReactCSSTransitionGroup>
    </div>
  );
};

export default UserMenu;