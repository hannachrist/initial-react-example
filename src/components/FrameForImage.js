import React from 'react';

import './FrameForImage.css';

const FrameForImage = (props) => {
    const { header, image, children } = props;
    
    return (
        <div className="frame">
            <h1 className="frame__header">
                { header }
            </h1>

            <div className="frame__content">
                <img src={ image }/>
            </div>

            {children && (
                <div className="frame__children">
                    { children }
                </div>
            )}
        </div>
    );
};

export default FrameForImage;
