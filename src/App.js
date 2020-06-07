import React from 'react';

import Navigation from './components/Navigation';
import AddressBookForm from './components/AddressBookForm/AddressBookForm';
import AddressBookList from './components/AddressBookList/AddressBookList';
import DesktopFanPage from './pages/DesktopFanPage';
import ClockPage from './pages/ClockPage';
import EmailLinkPage from './pages/EmailLinkPage';
import FrameForImagePage from './pages/FrameForImagePage';
import TrafficLightsButtonPage from './pages/TrafficLightsButtonPage';
import TrafficLightsPage from './pages/TrafficLightsPage';
import TrafficLightsAutoPage from './pages/TrafficLightsAutoPage';
import NotificationLinkPage from './pages/NotificationLinkPage';
import SpeedOMeterPage from './pages/SpeedOMeterPage';
import PianoKeysPage from './pages/PianoKeysPage';
import LiveClockPage from './pages/LiveClockPage';
import AddressBookPage from './pages/AddressBookPage';
import PianoKeysSmartPage from './pages/PianoKeysSmartPage';
import ImageSwitcherPage from './pages/ImageSwitcherPage';
import TemperatureChartPage from './pages/TemperatureChartPage';
import ModuleTabsPage from './pages/ModuleTabsPage';

import './App.css';

const App = () => (
    <div className="app">
        <Navigation />

        <div className="main-section main-section--with-left-sidebar">
            <div className="main-section__toolbar">
                {window.location.search === '' && 'Cats gallery'}

                {/* {window.location.search === '?page=traffic-lights' && 'Traffic lights'} */}

                {window.location.search === '?page=desktop-fan' && 'Desktop fan'}

                {window.location.search === '?page=clock' && 'Clock'}

                {/* {window.location.search === '?page=notifications' && 'Notifications'} */}

                {window.location.search === '?page=email-link' && 'Emails'}

                {/* {window.location.search === '?page=speedometer' && 'Speedometer'} */}

                {window.location.search === '?page=pianokeys' && 'Pianokeys'}

                {window.location.search === '?page=pianokeys-smart' && 'Pianokeys smart'}

                {window.location.search === '?page=traffic-lights-controlled' && 'Traffic lights controlled'}

                {/* {window.location.search === '?page=traffic-lights-auto' && 'Traffic lights auto'} */}

                {window.location.search === '?page=live-clock' && 'Live Clock'}

                {/* {window.location.search === '?page=light-bulb' && 'Light bulb'} */}

                {/* {window.location.search === '?page=address-book' && 'Address book'} */}

                {window.location.search === '?page=image-switcher' && 'Image switcher'}

                {window.location.search === '?page=temperature-chart' && 'Temperature chart'}

                {window.location.search === '?page=module-tabs' && 'Module tabs'}
            </div>

            {window.location.search === '' && <FrameForImagePage />}

            {/* {window.location.search === '?page=traffic-lights' && <TrafficLightsPage />} */}

            {window.location.search === '?page=desktop-fan' && <DesktopFanPage />}

            {window.location.search === '?page=clock' && <ClockPage />}

            {/* {window.location.search === '?page=notifications' && <NotificationLinkPage />} */}

            {window.location.search === '?page=email-link' && <EmailLinkPage />}

            {window.location.search === '?page=speedometer' && <SpeedOMeterPage />}

            {window.location.search === '?page=pianokeys' && <PianoKeysPage />}

            {/* {window.location.search === '?page=pianokeys-smart' && <PianoKeysSmartPage />} */}

            {window.location.search === '?page=traffic-lights-controlled' && <TrafficLightsButtonPage />}    

            {/* {window.location.search === '?page=traffic-lights-auto' && <TrafficLightsAutoPage />} */}

            {window.location.search === '?page=live-clock' && <LiveClockPage />}

            {/* {window.location.search === '?page=light-bulb' && (
                <div className="main-section__content">
                    <h1>
                        Light bulb
                    </h1>

                    <LightBulb />
                </div>    
            )} */}

            {/* {window.location.search === '?page=address-book' && <AddressBookPage />} */}

            {window.location.search === '?page=image-switcher' && <ImageSwitcherPage />}

            {window.location.search === '?page=temperature-chart' && <TemperatureChartPage />}

            {window.location.search === '?page=module-tabs' && <ModuleTabsPage />}
        </div>
    </div>
);

export default App;
