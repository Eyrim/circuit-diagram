import React from "react";

import "../styling/app.css";
import DiagramArea from "../diagram-area";
import ComponentSelect from "../component-select";

/**
 * 
 */
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedComponentName: "a",
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return <div> 
            <ComponentSelect handleClick={this.handleClick}>
            </ComponentSelect>
            {this.state.selectedComponentName}
        </div>;      
    }

    handleClick(e) {
        let clickedComponentName = e.target.getAttribute("data-index");

        console.log(clickedComponentName);

        this.setState({
            selectedComponentName: clickedComponentName
        });
    }
}