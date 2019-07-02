import React, { Component } from 'react'

import './WrapperContent.scss'

import LeftSidebar from '../leftSidebar/LeftSidebar'
import Main from '../main/Main'

export default class WrapperContent extends Component {
    render() {
        return (
            <div className="wrapper-content">
                <LeftSidebar/>
                <Main/>
            </div>
        )
    }
}