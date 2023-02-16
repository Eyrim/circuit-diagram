import React from "react";

import "./styling/component-select.css";

export default class ComponentSelect extends React.Component {
    constructor(handleClick) {
        super(handleClick);
        
        this.state = {
            arr: [
                <img src="./images/circuit-symbols/resistor-nema.png" onClick={this.props.handleClick} key="nema-resistor" data-index="nema-resistor"/>, 
                <img src="./images/circuit-symbols/resistor-iec.png" onClick={this.props.handleClick} key="iec-resistor" data-index="iec-resistor"/>
            ]
        }
    }

    render() {
        return <div className="componentSelect">
            <p>{this.state.arr}</p>
        </div>;
    }
}