import React from 'react';

const Navigation = () => (
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
            href="/?page=live-clock"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=live-clock' && 'sidebar-navigation-item--active')
            }    
        >
            Live Clock
        </a>

        {/* <a
            href="/?page=notifications"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=notifications' && 'sidebar-navigation-item--active')
            }
        >
            Notifications
        </a> */}

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

        <a
            href="/?page=pianokeys" 
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=pianokeys' && 'sidebar-navigation-item--active')
            }
        >
            Pianokeys
        </a>

        {/* <a
            href="/?page=pianokeys-smart" 
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=pianokeys-smart' && 'sidebar-navigation-item--active')
            }
        >
            Pianokeys smart
        </a> */}

        <a
            href="/?page=traffic-lights-controlled"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=traffic-lights-controlled' && 'sidebar-navigation-item--active')
            }    
        >
            Traffic lights controlled with buttons
        </a>

        <a
            href="/?page=traffic-lights-auto"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=traffic-lights-auto' && 'sidebar-navigation-item--active')
            }    
        >
            Traffic lights controlled auto
        </a>

        {/* <a
            href="/?page=address-book"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=address-book' && 'sidebar-navigation-item--active')
            }    
        >
            Address book
        </a> */}

        <a
            href="/?page=image-switcher"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=image-switcher' && 'sidebar-navigation-item--active')
            }    
        >
            Image switcher
        </a>

        <a
            href="/?page=temperature-chart"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=temperature-chart' && 'sidebar-navigation-item--active')
            }    
        >
            Temperature chart
        </a>

        <a
            href="/?page=module-tabs"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=module-tabs' && 'sidebar-navigation-item--active')
            }    
        >
            Module Tabs
        </a>

    </div>
);

export default Navigation;