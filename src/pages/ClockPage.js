import React from 'react';

import Clock from '../components/Clock/Clock';

const ClockPage = () => (
    <div className="main-section__content">
        <h1>
        What a lovely clock!
        </h1>

        <Clock 
            hh={10}
            mm={15}
            sec={34}    
        />
    </div>
);

export default ClockPage;