import React from 'react';

import cats from './cats';
import FrameForImage from './FrameForImage';

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
        </div>

        <div className="main-section main-section--with-left-sidebar">
            <div className="main-section__toolbar">
                {window.location.search === '' && 'Cats gallery'}

                {window.location.search === '?page=traffic-lights' && 'Traffic lights'}
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
                            Traffic lights around the world
                        </h1>

                            coming soon

                    </div>
                )}
        </div>
    </div>
);

export default App;
