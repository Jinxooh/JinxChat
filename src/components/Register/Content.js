import React from 'react';

const Content = ({children}) => {
    return (
        <div className="content">
            <h1>Welcome!</h1>
            <p>This is test <b>chatting app</b> for developer.</p>
            <p>Just do anything you can do!</p>
            <p></p>
            <p>You can not <b>imagine</b> what we'll become</p>
            <p>But first!, You have to make an <b>ID</b></p>
            {children}
        </div>
    );
};

export default Content;