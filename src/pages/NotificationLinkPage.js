import React from 'react';

import NotificationLink from '../components/NotificationLink/NotificationLink';

const NotificationLinkPage = () => (
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
);

export default NotificationLinkPage;