import React from 'react';
import AppHeader from '../Header';

function MainLayout(props) {
    return (
        <>
            <AppHeader/>
            {props.children}
        </>
    );
}

export default MainLayout;