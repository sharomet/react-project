import React, { Component } from 'react'

import UserAvatar from './userAvatar/UserAvatar'
import UserName from './userName/UserName'

import './LeftSidebar.scss'

export default class LeftSidebar extends Component {
    render() {
        return (
            <aside className="leftSidebar sidebar">
                <UserAvatar/>
                <UserName/>
                Left Sidebar
            </aside>
        )
    }
}