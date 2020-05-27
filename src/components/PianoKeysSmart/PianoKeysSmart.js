import React from 'react';

import '../PianoKeys/PianoKeys.css';


class PianoKeysSmart extends React.Component {

    constructor() {
        super();

        this.state = {
            style: ''
        };
    }

    // pressedStyle = () => {
    //     return {
    //         boxShadow: 'inset 0px -9px 25px -4px rgba(253, 255, 135, 0.932)'
    //     };
    // }
   
    changeStyle() {
        this.setState({
            boxShadow: 'inset 0px -9px 25px -4px rgba(253, 255, 135, 0.932)'
        })
    }

    render() {
        return (
            <div className='pianocontainer'>
                <div className='pianokeys'>
                    <div
                        className='pianokeys white' 
                        onKeyDown={(event) => {
                            if (event.key === 'z') {
                            this.changeStyle();
                            }
                        }}
                    >
                    </div>
                    <div 
                        className='pianokeys black one'
                    >
                    </div>
                    <div className={ 'pianokeys white ' }></div>
                    <div className={ 'pianokeys black two ' }></div>
                    <div className={ 'pianokeys white ' }></div>
                    <div className={ 'pianokeys white ' }></div>
                    <div className='pianokeys black three'></div>
                    <div className={ 'pianokeys white '}></div>
                    <div className='pianokeys black four'></div>
                    <div className={ 'pianokeys white ' }></div>
                    <div className={ 'pianokeys black five ' }></div>
                    <div className={ 'pianokeys white ' }></div>
                </div>
        
            </div>
        )
    }
};

export default PianoKeysSmart;