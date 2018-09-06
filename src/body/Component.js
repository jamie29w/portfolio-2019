import React from 'react'

const BodyComponent = () => {
    const styles = {
        componentStyles: {
            height: '150vh',
            backgroundColor: 'blue'
        }
    }

    return (
        <div style={styles.componentStyles}>hi from BodyComponent</div>
    )
}

export default BodyComponent