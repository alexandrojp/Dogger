import React from 'react';
import Navbar from './Navbar'

const Layout = props => (
    <React.Fragment>
        <Navbar />
        { props.children }
    </React.Fragment>
)

export default Layout