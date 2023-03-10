import React from "react";


// Electrical component
export default class Component extends React.Component  {
    constructor(xPos, yPos, symbolpath, componentName) {
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
            xPos: this.props.xPos,
            yPo: this.props.yPos,
            symbolPath: this.props.symbolPath,
            componentName: this.props.componentName
        });
    }

    render() {
        return <img src={this.state.symbolPath} alt={this.state.componentName}/>;
    }
}