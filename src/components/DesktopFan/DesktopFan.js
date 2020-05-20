import React from 'react';

import './DesktopFan.css';

class DesktopFan extends React.Component {
    render () {
        return (
                <div className={'fan-container ' + (this.props.isOn ?
                    'rotating' : '')}>
                    <div className='blade horizontal right'></div>
                    <div className='blade horizontal left'></div>  
                    <div className='blade vertical top'></div>
                    <div className='blade vertical bottom'></div>
                </div>
        )
    }
    
}

export default DesktopFan;