import React, {useState, useEffect} from "react";

// Electrical Component
export default function Component(props) {
    const [xPos, setXPos] = useState(-1);
    const [yPos, setYPos] = useState(-1);
    const [symbolPath, setSymbolPath] = useState("");
    const [componentName, setComponentName] = useState("");

    // Ran on mount
    //TODO: this is running 2 times, shouldn't be an issue but inefficent
    useEffect(() => {
        setXPos(props.xPos);
        setYPos(props.yPos);
        setSymbolPath(props.symbolPath);
        setComponentName(props.componentName);

    }, [props, xPos, yPos])

    return <img src={symbolPath} alt={componentName}/>;
}