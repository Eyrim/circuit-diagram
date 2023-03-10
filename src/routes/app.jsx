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
        let componentId = this.#hashIntoComponentId(e.clientX, e.clientY);

        // rendered by diagram-area
        // Create a new component object and push it to state
        this.state.componentArray.push(<Component xPos={e.clientX} yPos={e.clientY} symbolPath={symbolPath} componentName={clickedComponentName} key={componentId}></Component>);
        // a copy of the array held in state (updating the array doesn't update state therefore children won't update)
        let compArr = [...this.state.componentArray];
        // push to state
        this.setState({
            componentArray: compArr,
        });

        console.log(this.state.componentArray);
    }

    #getSymbolPathFromComponentName(componentName) {
        switch (componentName) {
            case "nema-resistor":
                return "./images/circuit-symbols/resistor-nema.png";

            case "iec-resistor":
                return "./images/circuit-symbols/resistor-iec.png"

            default:
                return "";
        }
    }

    /**
     * Creates a hash for the component to be added to the component table
     * 
     * The hash is computed by:
     * String(xPos) + String(yPos)
     * 
     * Collisions are handled by overwriting the previous value
     * @param {The X position of the component to be hashed} xPos 
     * @param {The Y position of the component to be hashed} yPos 
     * @returns {The computed key for the react element}
     */
    #hashIntoComponentId(xPos, yPos) {
        let key = String(xPos) + String(yPos);

        return key;
    }
}