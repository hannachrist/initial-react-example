import React from 'react';

import '../PianoKeys/PianoKeys.css';

class PianoKeysSmart extends React.Component {
    constructor() {
        super();
        
    };

    render() {
        return (
            <div className='pianocontainer'>
                <div className='pianokeys'>
                    <div className={ 'pianokeys white ' }></div>
                    <div className={ 'pianokeys black one ' }></div>
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