import React, { useState } from 'react';
import Timer from './Timer';
import { context } from './context';
import './Style.css';
import TimeSave from './TimeSave';

const App = () => {
    const [TimeSaved, setTimeSaved] = useState([]);

    return (
        <>
            <context.Provider value={{
                TimeSaved,
                setTimeSaved
            }}>
                <section class="BKEffect">
                    <Timer />
                    <TimeSave />
                </section>
            </context.Provider>
        </>
    );
};

export default App;