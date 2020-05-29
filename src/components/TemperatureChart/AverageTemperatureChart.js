import React from 'react';

import './AverageTemperatureChart.css';

class AverageTemperatureChart extends React.Component {
 
    render () {
        
        return (
            <div className='temp-chart'>
                <hr className='temp-chart__line'></hr>
                <div className='temp-chart__bar' ></div>
            </div>
        )
    }
};

export default AverageTemperatureChart;