import React from 'react';

import ImageSwitcher from '../components/ImageSwitcher/ImageSwitcher';

import cappuccino from './cappuccino.jpg';
import filterCoffee from './filter-coffee.jpg';
import cezve from './cezve.jpg';
import bialetti from './bialetti.jpg';

const ImageSwitcherPage = () => (
    <div className="main-section__content">
        <h1>
            Image switcher
        </h1>

        <ImageSwitcher>
            <img src={cappuccino} />
            <img src={filterCoffee} />
            <img src={cezve} />
            <img src={bialetti} />
        </ImageSwitcher>
    </div>
);

export default ImageSwitcherPage;