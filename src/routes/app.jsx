import React from "react";

import "../styling/app.css";
import DiagramArea from "../diagram-area";

export default class App extends React.Component {
    // Code requiring the DOM goes here
    componentDidMount() {
    }

    render() {
        return <DiagramArea>
        </DiagramArea>;      
    }
}