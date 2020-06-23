import React from 'react';

import './Header.css';

const Header = (props) => {
    return (
        <div className="app-header">


            {props.children}
        </div>
    );
}

export default Header;