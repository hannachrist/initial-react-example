import React from 'react';

import EmailLink from '../components/EmailLink/EmailLink';

const EmailLinkPage = () => (
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
);

export default EmailLinkPage;