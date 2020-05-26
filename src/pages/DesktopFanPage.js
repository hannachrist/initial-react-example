import React from 'react';

import DesktopFan from '../components/DesktopFan/DesktopFan';

const DesktopFanPage = () => (
    <div className="main-section__content">
        <h1>
            Desktop fan
        </h1>

        <DesktopFan isOn={true} />
        <DesktopFan isOn={false} />
    </div>
);

export default DesktopFanPage;