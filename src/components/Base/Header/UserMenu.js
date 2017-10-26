import React from 'react';
import { Icon } from 'semantic-ui-react';
import EyeCatchy from 'components/Common/EyeCatchy';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const UserMenu = ({ displayName, visible, onHide }) => {
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
                <div className="menu-item">
                  <div className="menu-name">
                    <Icon name="user" /><span>Jeckson</span>
                  </div>
                  <div className="description">view <b>Profile</b></div>
                </div>
                <div className="menu-item">
                  <div className="menu-name">
                  <Icon name="setting" /><span>Settings</span>
                </div>
                </div>
                <div className="menu-item">
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