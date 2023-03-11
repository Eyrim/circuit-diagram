import React, {useState, useEffect} from "react";


export default function Root(props) {

    function launchAppButton() {
        // Send the user to the app
        window.location.href = window.location.href += "app";
    }

    return <div>
            <u><h1>This project is based off of an <a href="https://github.com/Eyrim/circuit-sharp">old project</a> I originally wrote in C#, and is mostly done for my own educational purposes<br/>
            <strong>THERE ARE BETTER CIRCUIT DIAGRAM SOFTWARE OUT THERE:<br/></strong>
            This is my favourite: <a href="https://www.circuit-diagram.org/">circuit-diagram.org</a></h1></u>
            <br/>
            <br/>
            Following that, press <button type="button" onClick={launchAppButton}>here</button> to launch the application
        </div>;
}