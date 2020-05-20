import React from 'react';

import './Clock.css';

const Clock = (props) => {
    const hourHandAngle = -90 + (360 / 12) * props.hh;
    const minuteHandAngle = -90 + (360 / 60) * props.mm;
    const secondHandAngle = -90 + (360 / 60) * props.sec;

    const styleHrs = { transform: `rotate(${hourHandAngle}deg)` };
  const styleMinutes = { transform: `rotate(${minuteHandAngle}deg)` };
  const styleSeconds = { transform: `rotate(${secondHandAngle}deg)` };

    return (
        <div className='clock'>
            <div className='clock__hand clock__hand--hour' style={styleHrs}>
            </div>
            <div className='clock__hand clock__hand--minutes' style={styleMinutes}>
            </div>
            <div className='clock__hand clock__hand--seconds' style={styleSeconds}>
            </div>
        </div>
    );
};

export default Clock;