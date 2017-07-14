import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PrevButton = () => {
    return (
        <Link className="prev-button" to="/">
            <Icon name="mail forward"/>Prev
        </Link>
    );
};

export default PrevButton;