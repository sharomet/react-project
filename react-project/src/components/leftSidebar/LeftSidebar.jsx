import React, { Component } from 'react'

import './LeftSidebar.scss'
import SidebarMenu from './sidebarMenu/SidebarMenu'

export default class LeftSidebar extends Component {
    render() {
        return (
            <aside className="leftSidebar sidebar">
                <SidebarMenu/>
            </aside>
        )
    }
}