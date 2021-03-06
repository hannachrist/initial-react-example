import React from 'react';
import emailIcon from './email-icon.svg';

import './EmailLink.css';

const EmailLink = (props) => {
    const {
        href,
        numberOfUnread,
    } = props;
    
    return (
        <div className='email-container'>
            <a href={ href } className='email-container__anchor'>
                <img src={emailIcon} className='icon'/>
                { numberOfUnread ?
                (<span className='email-container__circle'>
                { numberOfUnread }
                </span>) :
                ''
                }  
            </a>
        </div>
    );
};

export default EmailLink;