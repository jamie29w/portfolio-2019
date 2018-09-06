import React, { Component } from 'react'
import BodyComponent from './Component'

class BodyContainer extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <BodyComponent/>
        )
    }
}

export default BodyContainer