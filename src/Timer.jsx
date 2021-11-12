import React, { useState } from 'react';
import { context } from './context';
import TimeSave from './TimeSave';

var Interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            IsStart: false
        }
    }

    static contextType = context;

    handleSaveTime = () => {
        let newTime = document.querySelector('.Timer_watch h2').innerHTML;
        if (this.context.TimeSaved.indexOf(newTime) == -1) {
            this.context.setTimeSaved([...this.context.TimeSaved, newTime]);
        }
    }

    start = () => {
        if (!this.state.IsStart) {
            this.setState({
                IsStart: true
            });
            Interval = setInterval(() => {
                this.setState({
                    second: this.state.second + 1
                });
                if (this.state.second === 60) {
                    this.setState({
                        second: 0,
                        minute: this.state.minute + 1
                    });
                }
                if (this.state.minute === 60) {
                    this.setState({
                        minute: 0,
                        hour: this.state.hour + 1
                    });
                }
            }, 1000);
        }
    }

    stop = () => {
        this.setState({
            IsStart: false
        });
        clearInterval(Interval);
    }

    reset = () => {
        this.stop();
        this.setState({
            second: 0,
            minute: 0,
            hour: 0
        });
        this.context.setTimeSaved([]);
    }

    render() {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;
        return (
            <>
                <div className="Timer">
                    <h2 className={`${(s < 1) ? "before_Hover" : "After_Hover"}`}>Hover Me!!!</h2>
                    <div className={`${(s < 1) ? "Timer_container" : ""} Timer_watch ${(s > 0) ? "Timer_watch_H" : ""} `}>
                        <h2 contenteditable="false" onClick={(s > 0) ? this.handleSaveTime : ""}>{`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}</h2>
                    </div>
                    <ul className={`${(s < 1) ? "Timer_container" : ""}`}>
                        <li className={`${(!this.state.IsStart) ? "play" : "stop"}`} onClick={(!this.state.IsStart) ? this.start : this.stop}><a href="#"><i id="Changer_icon" className={`fa ${(!this.state.IsStart) ? "fa-play" : "fa-pause"}`}></i></a></li>
                        <li className="reset" onClick={this.reset}><a href="#"><i class="fa fa-refresh"></i></a></li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Timer;


{
    // const Timer = () => {
    //     var Interval;
    //     const [IsStart, setIsStart] = useState(false);
    //     const [second, setsecond] = useState(0);
    //     const [minutes, setminutes] = useState(0);
    //     const [hour, sethour] = useState(0);


    //     const handlePlayTimer = () => {
    //         if (!IsStart) {
    //             setIsStart(true);
    //             Interval = setInterval(() => {
    //                 setsecond(second + 1);

    //                 if (second === 60) {
    //                     setsecond(0);
    //                     setminutes(minutes + 1)
    //                 }

    //                 if (minutes === 60) {
    //                     setminutes(0);
    //                     sethour(minutes + 1)
    //                 }
    //             }, 1000);
    //         }
    //     }

    //     const handleStopTimer = () => {
    //         setIsStart(false);
    //         clearInterval(Interval);
    //     }

    //     const handleResetTimer = () => {
    //         if (IsStart) {
    //             setIsStart(false);
    //             setsecond(0);
    //             setminutes(0);
    //             sethour(0);
    //             clearInterval(Interval);
    //         }
    //     }

    //     let h = hour;
    //     let m = minutes;
    //     let s = second;
    //     return (

    //         <>
    //             <div className="Timer">
    //                 <h2 className="before_Hover">Hover Me!!!</h2>
    //                 <div className={`Timer_container Timer_watch ${(IsStart) ? "Timer_watch_H" : ""} `}>
    //                     <h2 contenteditable="false">{`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}</h2>
    //                 </div>
    //                 <ul className="Timer_container">
    //                     <li className={`${(!IsStart) ? "play" : "stop"}`} onClick={(!IsStart) ? handlePlayTimer : handleStopTimer}><a href="#"><i id="Changer_icon" className={`fa ${(!IsStart) ? "fa-play" : "fa-pause"}`}></i></a></li>
    //                     <li className="reset" onClick={handleResetTimer}><a href="#"><i class="fa fa-refresh"></i></a></li>
    //                 </ul>
    //             </div>
    //         </>
    //     );
    // };

    // export default Timer;
}
