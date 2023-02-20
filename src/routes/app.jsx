import React from "react";

import "../styling/app.css";
import DiagramArea from "../diagram-area";
import ComponentSelect from "../component-select";
import Component from "../component";

/**
 * 
 */
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            // Electrical components (on the schematic)
            componentArray: [],
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return <div>
            <ComponentSelect handleClick={this.handleClick}>
            </ComponentSelect>
            <DiagramArea componentarray={this.state.componentArray}>
            </DiagramArea>
            {/*{this.state.selectedComponentName}*/}
        </div>;      
    }

    handleClick(e) {
        let clickedComponentName = e.target.getAttribute("data-index");
        let symbolPath = this.#getSymbolPathFromComponentName(clickedComponentName);

        // rendered by diagram-area
        // Create a new component object
        //this.state.componentArray.push(<Component xpos={e.clientX} ypos={e.clientY}  symbolpath={symbolPath}  componentname={clickedComponentName}></Component>);
        this.state.componentArray.push("A");
    }

    #getSymbolPathFromComponentName(componentName) {
        console.log(componentName);

        switch (componentName) {
            case "nema-resistor":
                return "./images/circuit-symbols/resistor-nema.png";

            case "iec-resistor":
                return "./images/circuit-symbols/resistor-iec.png"

            default:
                return "";
        }
    }
}