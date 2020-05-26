import React from 'react';

import TrafficLights from '../components/TrafficLights/TrafficLights';

const TrafficLightsPage = () => (
    <div className="main-section__content">
        <h1>
            Traffic lights
        </h1>

        <TrafficLights
            greenIsOn={true}
            yellowIsOn={false}
            redIsOn={false}
        />

        <TrafficLights
            greenIsOn={false}
            yellowIsOn={true}
            redIsOn={false}
        />

        <TrafficLights
            greenIsOn={false}
            yellowIsOn={false}
            redIsOn={true}
        />
    </div>
);

export default TrafficLightsPage;