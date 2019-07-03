import React, { Component, Fragment } from 'react';

import './SidebarMenu.scss'

export default class SidebarMenu extends Component {
    render() {
        return (
            <Fragment>
                <ul className="sidebar-nav">
                    <li>
                        <a href="#s">Dashboard</a>
                    </li>
                    <li>
                        <a href="#s">Categories</a>
                    </li>
                    <li>
                        <a href="#s">Products</a>
                    </li>
                    <li>
                        <a href="#s">Users</a>
                    </li>
                    <li>
                        <a href="#s">Settings</a>
                    </li>
                </ul>
            </Fragment>
        )
    }
}