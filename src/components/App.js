import React, { useState } from "react";

export default function App(){

    setInterval(updateTime,1000); //runs the function updateTime every 1000ms

    const now = new Date().toLocaleTimeString();
    const [time, setTime]=useState(now.slice(0,8));

    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime.slice(0,8));
    }

    return (
        <div className="container">
        <h1>{time}</h1>
        {/* <button onClick={updateTime}>Get Time</button> */}
        </div>
    );
}