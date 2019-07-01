import React, { Component } from 'react'

import './Content.scss'

import LeftSidebar from '../leftSidebar/LeftSidebar'
import RightSidebar from '../rightSidebar/RightSidebar'
import Main from '../main/Main'

export default class Content extends Component {
    render() {
        return (
            <div className="container content">
                <LeftSidebar/>
                <Main/>
                <RightSidebar/>
            </div>
        )
    }
}