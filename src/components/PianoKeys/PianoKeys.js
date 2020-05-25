import React from 'react';

import './PianoKeys.css';

class PianoKeys extends React.Component {
 
    render () {
        const {
            pressedNow = []
        } = this.props;

        return (
            <div className='pianocontainer'>
                <div className='pianokeys'>
                    <div className={ 'pianokeys white ' + 
                    (pressedNow.includes('z') ? 
                    'pressed' : '') }></div>
                    <div className={ 'pianokeys black one ' + 
                    (pressedNow.includes('s') ? 
                    'pressed' : '') }></div>
                    <div className={ 'pianokeys white ' + 
                    (pressedNow.includes('x') ? 
                    'pressed' : '') }></div>
                    <div className={ 'pianokeys black two ' + 
                    (pressedNow.includes('d') ? 
                    'pressed' : '') }></div>
                    <div className={ 'pianokeys white ' + 
                    (pressedNow.includes('c') ? 
                    'pressed' : '') }></div>
                    <div className={ 'pianokeys white ' + 
                    (pressedNow.includes('v') ? 
                    'pressed' : '') }></div>
                    <div className='pianokeys black three'></div>
                    <div className={ 'pianokeys white ' + 
                    (pressedNow.includes('b') ? 
                    'pressed' : '') }></div>
                    <div className='pianokeys black four'></div>
                    <div className={ 'pianokeys white ' + 
                    (pressedNow.includes('n') ? 
                    'pressed' : '') }></div>
                    <div className={ 'pianokeys black five ' + 
                    (pressedNow.includes('j') ? 
                    'pressed' : '') }></div>
                    <div className={ 'pianokeys white ' + 
                    (pressedNow.includes('m') ? 
                    'pressed' : '') }></div>
                </div>
        
            </div>
        )
    }
}

export default PianoKeys;