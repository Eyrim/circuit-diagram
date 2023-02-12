import React from "react";

import "../styling/resistor-page.css";

export default class Resistor extends React.Component {
    // Stores resistor data used to populate page
    #data = {
        circuitSymbol: "https://raw.githubusercontent.com/Eyrim/circuit-sharp/main/wwwroot/GenericData/Imgs/genericResistor.png",
    };

    render() {
        return <div>
            <h1>
                The resistor
            </h1>
        
            <h2> 
                The resistor is an electrical component that limits the flow of current, acting as a load.
            </h2>

            The circuit symbol for a resistor looks as follows:
            <img src={this.#data.circuitSymbol} />
        </div>;
    }
}