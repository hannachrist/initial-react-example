import React from 'react';

import SpeedOMeter from '../components/SpeedOMeter/SpeedOMeter';

const SpeedOMeterPage = () => (
    <div className="main-section__content">
        <h1>
            Speedometer
        </h1>

        <SpeedOMeter speed={0} />

        <SpeedOMeter speed={120} />
        
        <SpeedOMeter speed={200} />
    </div>
);

export default SpeedOMeterPage;