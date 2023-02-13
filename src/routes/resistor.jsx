import React from "react";

import "../styling/resistor-page.css";

export default class Resistor extends React.Component {
    // Stores resistor data used to populate page
    #data = {
        iecSymbol: "images/circuit-symbols/resistor-iec.png",
        nemaSymbol: "images/circuit-symbols/resistor-nema.png",
    };

    render() {
        return <div>
            <h1>
                The resistor
            </h1>
        
            <h2> 
                The resistor is an electrical component that limits the flow of current, acting as a load.
            </h2>

            The IEC circuit symbol for a resistor looks as follows:
            <img src={this.#data.iecSymbol} alt="The IEC circuit symbol for a resistor"/>
            <br />
            The NEMA circuit symbol for a resistor looks as follows:
            <img src={this.#data.nemaSymbol} alt="The NEMA circuit symbol for a resistor"/>
        </div>;
    }
}