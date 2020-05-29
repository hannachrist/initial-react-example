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
                    <div 
                        className={ 'pianokeys__white ' + 
                            (pressedNow.includes('z') ? 
                            'pianokeys--pressed' : '')
                        }
                    >
                    </div>
                    <div 
                        className={ 'pianokeys__black pianokeys__black--one ' + 
                            (pressedNow.includes('s') ? 
                            'pianokeys--pressed' : '')
                        }
                    >
                    </div>
                    <div 
                        className={ 'pianokeys__white ' + 
                            (pressedNow.includes('x') ? 
                            'pianokeys--pressed' : '')
                        }
                    >
                    </div>
                    <div 
                        className={ 'pianokeys__black pianokeys__black--two ' + 
                            (pressedNow.includes('d') ? 
                            'pianokeys--pressed' : '')
                        }
                    >
                    </div>
                    <div 
                        className={ 'pianokeys__white ' + 
                            (pressedNow.includes('c') ? 
                            'pianokeys--pressed' : '')
                        }
                    >
                    </div>
                    <div 
                        className={ 'pianokeys__white ' + 
                            (pressedNow.includes('v') ? 
                            'pianokeys--pressed' : '')
                        }
                    >
                    </div>
                    <div 
                        className={ 'pianokeys__black pianokeys__black--three ' + 
                            (pressedNow.includes('g') ? 
                            'pianokeys--pressed' : '')
                        }
                    >
                    </div>
                    <div 
                        className={ 'pianokeys__white ' + 
                            (pressedNow.includes('b') ? 
                            'pianokeys--pressed' : '')
                        }
                    >
                    </div>
                    <div 
                     className={ 'pianokeys__black pianokeys__black--four ' + 
                            (pressedNow.includes('h') ? 
                            'pianokeys--pressed' : '')
                        }
                    >
                    </div>
                    <div 
                        className={ 'pianokeys__white ' + 
                            (pressedNow.includes('n') ? 
                            'pianokeys--pressed' : '')
                        }
                    >
                    </div>
                    <div 
                        className={ 'pianokeys__black pianokeys__black--five ' + 
                            (pressedNow.includes('j') ? 
                            'pianokeys--pressed' : '')
                        }
                    >
                    </div>
                    <div 
                        className={ 'pianokeys__white ' + 
                            (pressedNow.includes('m') ? 
                            'pianokeys--pressed' : '')
                        }
                    >
                    </div>
                </div>
            </div>
        )
    }
};

export default PianoKeys;
