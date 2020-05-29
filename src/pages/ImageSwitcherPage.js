import React from 'react';

import ImageSwitcher from '../components/ImageSwitcher/ImageSwitcher';

const ImageSwitcherPage = () => (
    <div className="main-section__content">
        <h1>
            Image switcher
        </h1>

        <ImageSwitcher>
            <img src='https://p2.piqsels.com/preview/180/610/522/coffee-cafe-hot-mug.jpg' />
            {/* <img src={} /> */}
        </ImageSwitcher>
    </div>
);

export default ImageSwitcherPage;