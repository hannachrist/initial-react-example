import React from 'react';

import Clock from '../Clock/Clock';

class LiveClock extends React.Component {
    constructor(props) {
        super(props);
        const myDate = new Date();    

        this.state = {
            hours: myDate.getHours(),
            minutes: myDate.getMinutes(),
            seconds: myDate.getSeconds(),
        }
    }

    // const {
    //     hours = myDate.getHours(),
    //     minutes = myDate.getMinutes(),
    //     seconds = myDate.getSeconds(),
    // } = this.state;
    
    render () {
       return (
            <div className='live-clock'>
                <Clock 
                    hh={this.state.hours} 
                    mm={this.state.minutes}
                    sec={this.state.seconds}
                />
            </div>
       ) 
    }

    componentDidMount() {
        setInterval(() => {
            const myDate = new Date();   
            this.setState({
                hours: myDate.getHours(),
                minutes: myDate.getMinutes(),
                seconds: myDate.getSeconds(),
            })
        })
    }
}    

export default LiveClock;