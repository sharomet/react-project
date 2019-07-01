import React, { Component } from 'react'

import { Card } from 'react-bootstrap'
import './UserAvatar.scss'

export default class UserAvatar extends Component {
    render() {
        return (
            <Card className="userAvatar">
                <Card.Img variant="top" src="assets/img/no-img.jpg" />
            </Card>
        )
    }
}