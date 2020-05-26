import React from 'react';

import PianoKeys from '../components/PianoKeys/PianoKeys';

const PianoKeysPage = () => (
    <div className="main-section__content">
                    <h1>
                        Pianokeys
                    </h1>

                    <PianoKeys pressedNow={[ 'z', 'v' ]} />

                    <PianoKeys pressedNow={[ 'z', 'v', 'j' ]} />

                    <PianoKeys pressedNow={[]} />

                    <PianoKeys />

                </div>
);

export default PianoKeysPage;