import React, { Component } from 'react'
import NavContainer from './nav/Container'
import BodyContainer from './body/Container'
import FooterContainer from './footer/Container'

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
                <NavContainer/>
                <BodyContainer/>
                <FooterContainer/>
            </div>
        )
    }
}

export default App