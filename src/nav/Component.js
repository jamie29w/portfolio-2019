import React from 'react'

const NavComponent = props => {
    // const componentStyles = {
    //         height: '15vh',
    //         maxHeight: '90px',
    //         fontSize: '3em',
    //         display: 'flex',
    //         justifyContent: 'space-between',
            
    //     },
    //     iconStyles = {
    //         margin: '10px',
    //         alignSelf: 'center'
    //     },
    //     initialStyles = {
    //         margin: '10px'
    //     },
        // line1 = {
        //     backgroundColor: 'rgba(255, 0, 255, 1)',
        //     height: '2px',
        //     width: '20px',
        //     marginTop: '1vh',
        //     transitionDuration: '.9s',
        //     animationFillMode: 'backwards'
        // },
        // line2 = {
        //     ...line1
        // },
        // line3 = {
        //     ...line1,
        //     marginBotton: '1vh'
        // },
        // line1Hover = {
        //     transform: 'matrix(1, 0, 0, 1, 0, 0)'
        // },
        // line2Hover = {
        //     transform: 'matrix(1, 0, 0, 1, 0, 0)'
        // },
        // line3Hover = {
        //     transform: 'matrix(1, 0, 0, 1, 0, 0)'
        // }
    

    return (
        <div className='componentStyles'>
            <h3 className='dosis initialStyles'>JW</h3>
            <div
                className='iconStyles'
                // onMouseEnter={props.burgerMouseEnter}
                // onMouseLeave={props.burgerMouseLeave}
            >
                {/* <div style={props.navHover ? line2Hover : line2}></div>
                <div style={props.navHover ? line3Hover : line3}></div>
                <div style={props.navHover ? line1Hover : line1}></div> */}
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </div>
    )
}

export default NavComponent