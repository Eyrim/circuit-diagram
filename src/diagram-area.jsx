import React from "react";
import ReactDOM from "react-dom/client";
//import { ReactDOM } from "react";

import "./styling/app.css"

export default class DiagramArea extends React.Component {
    // {this.props.selectedComponent}

    render() {
        return <div id="diagram-area" className="diagram-area" onClick={this.#handleClick}>a</div>;
    }

    #handleClick(e) {
        let pageX = e.pageX;
        let pageY = e.pageY;
    }
}