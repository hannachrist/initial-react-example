import React from 'react';

import cats from './cats';
import FrameForImage from './FrameForImage';
import TrafficLights from './components/TrafficLights/TrafficLights';
import DesktopFan from './components/DesktopFan/DesktopFan';

import './App.css';

const App = () => (
    <div className="app">
        <div className="left-sidebar left-sidebar--visible">
            <div className="left-sidebar__toolbar">
                Navigation
            </div>

            <a
                href="/"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '' && 'sidebar-navigation-item--active')
                }
            >
                Cats gallery
            </a>

            <a
                href="/?page=traffic-lights"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=traffic-lights' && 'sidebar-navigation-item--active')
                }    
            >
                Traffic lights
            </a>

            <a
                href="/?page=desktop-fan"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=desktop-fan' && 'sidebar-navigation-item--active')
                }    
            >
                Desktop fan
            </a>
        </div>

        <div className="main-section main-section--with-left-sidebar">
            <div className="main-section__toolbar">
                {window.location.search === '' && 'Cats gallery'}

                {window.location.search === '?page=traffic-lights' && 'Traffic lights'}

                {window.location.search === '?page=desktop-fan' && 'Desktop fan'}
            </div>

            {window.location.search === '' && (
                <div className="main-section__content">
                    <h1>
                        Some cat pictures here :-)
                    </h1>

                    <FrameForImage
                        header={cats[0].headerText}
                        image={cats[0].imageUrl}
                    >
                        {cats[0].description}
                    </FrameForImage>

                    <FrameForImage
                        header={cats[1].headerText}
                        image={cats[1].imageUrl}
                    >
                        {cats[1].description}
                    </FrameForImage>

                    <FrameForImage
                        header={cats[2].headerText}
                        image={cats[2].imageUrl}
                    >
                        {cats[2].description}
                    </FrameForImage>
                </div>
            )}

            {window.location.search === '?page=traffic-lights' && (
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
            )}

            {window.location.search === '?page=desktop-fan' && (
                <div className="main-section__content">
                    <h1>
                        Desktop fan
                    </h1>

                    <DesktopFan isOn={true} />
                    <DesktopFan isOn={false} />

                </div>
            )}
        </div>
    </div>
);

export default App;
