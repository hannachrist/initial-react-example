import React from 'react';

import './AddressBookList.css';

class AddressBookList extends React.Component {
    render () {
        const {
            users = [
                {
                  firstName: "Hawkins",
                  lastName: "Solomon",
                  company: "Yandex",
                  phone: "+1 (934) 504-2067",
                },
                {
                  firstName: "Shelton",
                  lastName: "Frost",
                  company: "Yahoo!",
                  phone: "+1 (980) 571-2853",
                },
                {
                  firstName: "Mckenzie",
                  lastName: "Rasmussen",
                  company: "Google",
                  phone: "+1 (812) 496-2735",
                }
            ]
        } = this.props;


        return (
            <div className="AddressBookList-container">
                { users.map(({ firstName, lastName, company, phone }) => {
                    return (
                        <div>
                            <span className="userdata">
                                { firstName }
                            </span> 
                            <span className="userdata">
                                { lastName }
                            </span> 
                            <span className="userdata">
                                { company }
                            </span> 
                            <span className="userdata">
                                { phone }
                            </span>
                        </div>
                    )
                }) }
            </div>
        )
    }
}

export default AddressBookList;