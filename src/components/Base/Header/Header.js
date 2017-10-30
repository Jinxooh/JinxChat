import React from 'react';
export { default as BrandLogo } from './BrandLogo';
export { default as SidebarButton } from './SidebarButton';
export { default as AuthButton } from './AuthButton';
export { default as UserButton } from './UserButton';
export { default as UserMenu } from './UserMenu';

const Header = ({children}) => {
    return (
        <div>
            <div className='header-wrapper'>
                <div className='header'>
                    {children}
                </div>
            </div>
            <div className='header_spacer'></div>
        </div>
    );
};

export default Header;
