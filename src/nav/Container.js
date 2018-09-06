import React, { Component } from 'react'
import NavComponent from './Component'

class NavContainer extends Component {
    constructor() {
        super()
        this.state = {
            navOpen: false,
            navHover: false
        }
        this.burgerMouseEnter = this.burgerMouseEnter.bind(this)
        this.burgerMouseLeave = this.burgerMouseLeave.bind(this)
    }

    burgerMouseEnter = (e) => {
        console.log('in da mouse')
        this.setState(prevState =>{
            return {
                ...prevState,
                navHover: true
            }
        })
    }
    
    burgerMouseLeave = (e) => {
        console.log('out da mouse')
        this.setState(prevState =>{
            return {
                ...prevState,
                navHover: false
            }
        })
    }

    
    render() {
        
        return (
            <NavComponent
                navHover={this.state.navHover}
                burgerMouseEnter={this.burgerMouseEnter}
                burgerMouseLeave={this.burgerMouseLeave}
            />
        )
    }
}

export default NavContainer