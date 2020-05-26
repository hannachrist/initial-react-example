import React from 'react';

class AddressBook extends React.Component {
   constructor() {
       super();

       this.state = {
            users: [
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
            ],
            selectedIndex: 0
        };
   }
   
    render() {
        const { users, selectedIndex } = this.state;

        return (
            <div>
                <div className="form-container">
                    { users.map(({ firstName, lastName, company, phone }, index) => {
                        if (index === selectedIndex) {
                            return (
                                <form 
                                style={{
                                        padding: 5,
                                        border: `1px solid red`,
                                        marginBottom: 4
                                    }}
                                >
                                    <div>
                                        <input className="form text" type="text" placeholder="First name" value={firstName} onChange={(event) => {
                                            const updatedUsers = users.slice();
                                            updatedUsers[selectedIndex].firstName = event.target.value;

                                            this.setState({
                                                users: updatedUsers,
                                            })
                                        }} />
                                    </div>
                                    <div>
                                        <input className="form text" type="text" placeholder="Last name" value={lastName} onChange={(event) => {
                                            const updatedUsers = users.slice();
                                            updatedUsers[selectedIndex].lastName = event.target.value;

                                            this.setState({
                                                users: updatedUsers,
                                            })
                                        }}/>
                                    </div>
                                    <div>
                                        <input className="form text" type="text" placeholder="Company" value={company} onChange={(event) => {
                                            const updatedUsers = users.slice();
                                            updatedUsers[selectedIndex].company = event.target.value;

                                            this.setState({
                                                users: updatedUsers,
                                            })
                                        }}/>
                                    </div>
                                    <div>
                                        <input className="form text" type="text" placeholder="Phone number" value={phone} onChange={(event) => {
                                            const updatedUsers = users.slice();
                                            updatedUsers[selectedIndex].phone = event.target.value;

                                            this.setState({
                                                users: updatedUsers,
                                            })
                                        }}/>
                                    </div>    

                                    {/* <input className="btn save" type="submit" value="Save" /> */}
                                </form>
                            )
                        }   
               

                        return (
                            <div 
                                style={{ 
                                    border: '1px solid black',
                                    padding: '5px',
                                    marginBottom: '5px'
                                }}

                                onClick={() => this.setState({
                                    selectedIndex: index,
                                })}
                            >
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
                        );
                    }) }

                    <div
                        style={{
                            padding: 5,
                            color: 'white',
                            backgroundColor: 'red',
                            marginBottom: 4,
                            textAlign: 'center',
                        }}

                        onClick={() => {
                            const newArray = this.state.users.slice();
                            newArray.push({});

                            const newSelectedIndex = newArray.length - 1;

                            this.setState({
                                users: newArray,
                                selectedIndex: newSelectedIndex,
                            });
                        }}
                    >
                        +
                    </div>
                </div>
            </div>
        );
    }
}

export default AddressBook;