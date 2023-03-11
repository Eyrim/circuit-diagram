import React, {useState, useEffect} from "react";

import "../styling/resistor-page.css";


export default function Resistor(props) {
    const [data, setData] = useState({
        iecSymbol: "images/circuit-symbols/resistor-iec.png",
        nemaSymbol: "images/circuit-symbols/resistor-nema.png",
    });

    return <div>
            <h1>
                The resistor
            </h1>
        
            <h2> 
                The resistor is an electrical component that limits the flow of current, acting as a load.
            </h2>

            The IEC circuit symbol for a resistor looks as follows:
            <img src={data.iecSymbol} alt="The IEC circuit symbol for a resistor"/>
            <br />
            The NEMA circuit symbol for a resistor looks as follows:
            <img src={data.nemaSymbol} alt="The NEMA circuit symbol for a resistor"/>
        </div>;
}