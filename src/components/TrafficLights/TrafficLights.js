import React from 'react';
import './TrafficLights.css';

class TrafficLights extends React.Component {
    render() {
        const {
            redIsOn = true,
            greenIsOn = false,
            yellowIsOn = false,
        } = this.props;

        return (
            <div className='traffic-lights'>
                <div className={'traffic-lights__light traffic-lights__light--red ' + (redIsOn ? 
                'traffic-lights__light--active' : '')}></div>
                <div className={'traffic-lights__light traffic-lights__light--yellow ' + (yellowIsOn ? 
                'traffic-lights__light--active' : '')}></div>
                <div className={'traffic-lights__light traffic-lights__light--green ' + (greenIsOn ? 
                'traffic-lights__light--active' : '')}></div>
            </div>
        )
    }    
}

export default TrafficLights;