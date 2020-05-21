import React from 'react';
import emailIcon from './email-icon.svg';

import './EmailLink.css';

const EmailLink = (props) => {
    return (
        <div className='email-container'>
            <a href={ props.href } className='anchor'>
                <img src={emailIcon} className='icon'/>
                { props.numberOfUnread ?
                (<span className='circle'>
                { props.numberOfUnread }
                </span>) :
                ''
                }  
            </a>
        </div>
    );
};

export default EmailLink;