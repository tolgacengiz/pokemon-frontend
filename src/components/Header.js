import React from 'react';

const Header = (props) => {
    return (
        <div className="app-header">
            header

            {props.children}
        </div>
    );
}

export default Header;