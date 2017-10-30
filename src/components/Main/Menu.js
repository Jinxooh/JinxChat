import React from 'react';
import { Dropdown, Icon, Input, Menu as SemanticMenu} from 'semantic-ui-react'

const Menu = ({ activeItem, handleItemClick }) => {
    return (
      <div className='menu-wrapper'>
        <SemanticMenu vertical>
        <SemanticMenu.Item>
          <Input placeholder='Search...' />
        </SemanticMenu.Item>

        <SemanticMenu.Item>
          Home

          <SemanticMenu.Menu>
            <SemanticMenu.Item name='search' active={activeItem === 'search'} onClick={handleItemClick}>
              Search
            </SemanticMenu.Item>
            <SemanticMenu.Item name='add' active={activeItem === 'add'} onClick={handleItemClick}>
              Add
            </SemanticMenu.Item>
            <SemanticMenu.Item name='about' active={activeItem === 'about'} onClick={handleItemClick}>
              Remove
            </SemanticMenu.Item>
          </SemanticMenu.Menu>
        </SemanticMenu.Item>

        <SemanticMenu.Item name='browse' active={activeItem === 'browse'} onClick={handleItemClick}>
          <Icon name='grid layout' />
          Browse
        </SemanticMenu.Item>
        <SemanticMenu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
          Messages
        </SemanticMenu.Item>

        <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
      </SemanticMenu>
      </div>
    );
};

export default Menu;