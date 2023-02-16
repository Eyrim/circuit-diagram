import React from "react";

import "../styling/app.css";
import DiagramArea from "../diagram-area";

/**
 * 
 */
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedComponent: {},
        }
    }

    render() {
        return <DiagramArea>
        </DiagramArea>;      
    }
}