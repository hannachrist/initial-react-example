import React from 'react';
import './TrafficLights.css';

class TrafficLights extends React.Component {
    render() {
        return (
            <div className='traffic-lights'>
                <div className={'traffic-lights__light traffic-lights__light--red ' + (this.props.redIsOn ? 
                'traffic-lights__light--active' : '')}></div>
                <div className={'traffic-lights__light traffic-lights__light--yellow ' + (this.props.yellowIsOn ? 
                'traffic-lights__light--active' : '')}></div>
                <div className={'traffic-lights__light traffic-lights__light--green ' + (this.props.greenIsOn ? 
                'traffic-lights__light--active' : '')}></div>
            </div>
        )
    }    
}

export default TrafficLights;