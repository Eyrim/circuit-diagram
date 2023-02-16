import React from "react";

export default class Component extends React.Component  {
    constructor() {
        super();
        this.state = {
            symbolPath: "",
            componentName: "",
        };
    }

    componentWillMount() {
        this.setState({
            symbolPath: this.props.symbolPath,
            componentName: this.props.componentName
        });
    }

    render() {
        return <img src={this.state.symbolPath} onClick={this.#handleClick}/>;
    }

    #handleClick(e) {
        
    }
}