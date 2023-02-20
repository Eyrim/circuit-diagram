import React from "react";

// Electrical component
export default class Component extends React.Component  {
    constructor() {
        super();

        this.state = {
            xPos: 0,
            yPos: 0,
            symbolPath: "",
            componentName: "",
        };
    }

    componentDidMount() {
        this.setState({
            xPos: this.props.xpos,
            yPo: this.props.yPos,
            symbolPath: this.props.symbolpath,
            componentName: this.props.componentname
        });
    }

    render() {
        return <img src={this.state.symbolPath} alt={this.state.componentName}/>;
    }
}