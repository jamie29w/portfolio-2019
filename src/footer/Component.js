import React from 'react'

const FooterComponent = () => {
    const styles = {
        componentStyles: {
            color: 'rgba(49, 54, 57, 1)',
            backgroundColor: 'rgba(245, 245, 245, 1)',
            minHeight: '15vh'
        }
    }

    return (
        <div style={styles.componentStyles}>hi from FooterComponent</div>
    )
}

export default FooterComponent