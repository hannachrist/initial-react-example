import React from 'react';

import './SpeedOMeter.css';

class SpeedOMeter extends React.Component {
    render () {
        const handAngle =
            (this.props.speed < 180) ? 
            (135 + this.props.speed * 1.5) :
            (135 + 180 * 1.5)
        ;
        
        const styleHandAngle = { transform: `rotate(${handAngle}deg)` };

        const styleRed =
            (this.props.speed > 180) ?
            {backgroundColor: 'tomato'} :
            {backgroundColor: 'black'}
        ;

        return (
            <div className='speedometer' style={styleRed}>
                <div className='hand' style={styleHandAngle}></div>

                <div className='scalemarker zero'></div>
                <div className='scalemarker twenty'></div>
                <div className='scalemarker forty'></div>
                <div className='scalemarker sixty'></div>
                <div className='scalemarker eighty'></div>
                <div className='scalemarker hundred'></div>
                <div className='scalemarker hundred-twenty'></div>
                <div className='scalemarker hundred-forty'></div>
                <div className='scalemarker hundred-sixty'></div>
                <div className='scalemarker hundred-eighty'></div>
        
                <div className='scale zero'>0</div>
                <div className='scale twenty'>20</div>
                <div className='scale forty'>40</div>
                <div className='scale sixty'>60</div>
                <div className='scale eighty'>80</div>
                <div className='scale hundred'>100</div>
                <div className='scale hundred-twenty'>120</div>
                <div className='scale hundred-forty'>140</div>
                <div className='scale hundred-sixty'>160</div>
                <div className='scale hundred-eighty'>180</div>
                
            </div>
        )
    }
}

export default SpeedOMeter;