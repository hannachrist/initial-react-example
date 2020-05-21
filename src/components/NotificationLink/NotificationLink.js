import React from 'react';
import bell from './notifications-24px.svg';
import bellEmpty from './notifications_none-24px.svg';

class NotificationLink extends React.Component {
    render () {
        return (
            <a href={this.props.href}>
                <img src={this.props.haveUnread ? bell : bellEmpty} />
            </a>
        )
    }
}

export default NotificationLink;