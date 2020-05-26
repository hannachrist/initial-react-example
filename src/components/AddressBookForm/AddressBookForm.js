import React from 'react';

import './AddressBookForm.css';

class AddressBookForm extends React.Component {
    render () {
        return (
            <div>
                <div className="form-container">
                    <form>
                        <div>
                            <input className="form text" type="text" placeholder="First name" />
                        </div>
                        <div>
                            <input className="form text" type="text" placeholder="Last name" />
                        </div>
                        <div>
                            <input className="form text" type="text" placeholder="Company" />
                        </div>
                        <div>
                            <input className="form text" type="text" placeholder="Phone number" />
                        </div>    

                        <input className="btn save" type="submit" value="Save" />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddressBookForm;