import React, { useEffect } from 'react';
import { useContext } from 'react';
import reactDom from 'react-dom';
import { context } from './context';

const TimeSave = () => {
    const Context = useContext(context);

    const handleDeleteTimeSaved=(e)=>{
        Context.setTimeSaved(Context.TimeSaved.filter(t=> t != e.target.innerHTML));
    }

    return (
        <>
            <div className="Time_Save">
                {Context.TimeSaved.map((t)=>(<h2 id="TIME" onClick={handleDeleteTimeSaved}>{t}</h2>))}
            </div>
        </>
    );
};

export default TimeSave;