import React from 'react';

import './LightBulb.css';

class LightBulb extends React.Component {
   constructor(props) {
       super(props);

       this.state = {
           turnedOn: false,
           count: 0,
       }
   }
   
    render () {
        return (
            <div className={ this.state.turnedOn === true ? ('block' + ' night') : 'block' }>
                <button
                    onClick={() => {
                        this.setState({
                            turnedOn: true,
                            count: this.state.count + 1,
                        });
                        console.log(this.state.count);
                    }}
                > turn me on! 
                </button>
                <div className="container">
                    <div className="bulb-light">
                        <div id="light" />

                        <div id="bulb">
                            <div className="bulb-top">
                                <div className="reflection" />
                            </div>
                            <div className="bulb-middle-1" />
                            <div className="bulb-middle-2" />
                            <div className="bulb-middle-3" />
                            <div className="bulb-bottom" />
                        </div>

                        <div id="base">
                            <div className="screw-top" />
                            <div className="screw-a" />
                            <div className="screw-b" />
                            <div className="screw-a" />
                            <div className="screw-b" />
                            <div className="screw-a" />
                            <div className="screw-b" />
                            <div className="screw-c" />
                            <div className="screw-d" />
                        </div>
                    </div>
                </div>
            </div>
        )    
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             turnedOn: false,
    //         })
    //     }, 5000 )
    // }

}

export default LightBulb;