import React from 'react';

import AddressBook from '../components/AddressBook';

const AddressBookPage = () => (
    <div className="main-section__content">
        <h1>
            Address book
        </h1>

        <AddressBook />

        {/* <AddressBookList /> */}
    </div>
);

export default AddressBookPage;