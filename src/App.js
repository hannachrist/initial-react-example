import React from 'react';

import cats from './components/cats';
import FrameForImage from './FrameForImage';
import TrafficLights from './components/TrafficLights/TrafficLights';
import DesktopFan from './components/DesktopFan/DesktopFan';
import Clock from './components/Clock/Clock';
import NotificationLink from './components/NotificationLink/NotificationLink';
import EmailLink from './components/EmailLink/EmailLink';
import SpeedOMeter from './components/SpeedOMeter/SpeedOMeter';

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

            <a
                href="/?page=clock"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=clock' && 'sidebar-navigation-item--active')
                }    
            >
                Clock
            </a>

            <a
                href="/?page=notifications"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=notifications' && 'sidebar-navigation-item--active')
                }
            >
                Notifications
            </a>

            <a
                href="/?page=email-link" 
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=email-link' && 'sidebar-navigation-item--active')
                }
            >
                Emails
            </a>

            <a
                href="/?page=speedometer" 
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=speedometer' && 'sidebar-navigation-item--active')
                }
            >
                Speedometer
            </a>

        </div>

        <div className="main-section main-section--with-left-sidebar">
            <div className="main-section__toolbar">
                {window.location.search === '' && 'Cats gallery'}

                {window.location.search === '?page=traffic-lights' && 'Traffic lights'}

                {window.location.search === '?page=desktop-fan' && 'Desktop fan'}

                {window.location.search === '?page=clock' && 'Clock'}

                {window.location.search === '?page=notifications' && 'Notifications'}

                {window.location.search === '?page=email-link' && 'Emails'}

                {window.location.search === '?page=speedometer' && 'Speedometer'}
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

            {window.location.search === '?page=clock' && (
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
            )}

            {window.location.search === '?page=notifications' && (
                <div className="main-section__content">
                <h1>
                    New Notifications?
                </h1>

                <NotificationLink
                    href="/?page=notifications"
                    haveUnread={true}
                />

                <NotificationLink
                    href="/?page=notifications"
                    haveUnread={false}
                />

                <NotificationLink
                    href="/?page=notifications"
                />

                </div>
            )}

            {window.location.search === '?page=email-link' && (
                <div className="main-section__content">
                    <h1>
                        Emails
                    </h1>

                    <EmailLink
                        href="/?page=emails"
                        numberOfUnread={10}
                    />

                    <EmailLink
                        href="/?page=emails"
                        numberOfUnread={0}
                    />

                    <EmailLink
                        href="/?page=emails"
                    />
                </div>
            )}

            {window.location.search === '?page=speedometer' && (
                <div className="main-section__content">
                    <h1>
                        Leadfoot?
                    </h1>

                    <SpeedOMeter speed={0} />

                    <SpeedOMeter speed={120} />
                    
                    <SpeedOMeter speed={200} />
                </div>    
            )}
        </div>
    </div>
);

export default App;
