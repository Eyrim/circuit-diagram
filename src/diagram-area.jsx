import React from "react";
import ReactDOM from "react-dom/client";
//import { ReactDOM } from "react";

import "./styling/app.css"

export default class DiagramArea extends React.Component {
    // {this.props.selectedComponent}
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="diagram-area" className="diagram-area" onClick={this.#handleClick}>
            {this.props.componentarray}aa
        </div>;
    }

    #handleClick(e) {
        let pageX = e.pageX;
        let pageY = e.pageY;
        //console.log(this.props.componentarray);
        console.log("AAAAAAAAA");
    }
}