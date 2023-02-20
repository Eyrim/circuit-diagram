// This class provides methods to allow an image to follow the mouse 

export default class FollowMouse {
    /**
     * @param {The component to watch} component 
     */
    constructor(component) {
        this.state = {
            watchedComponent: null,
            x: null,
            y: null,
        }

        console.log("init");
    }

    startWatch() {
        // Create an event listener for the component
        this.state.watchedComponent.addEventListener('mousemove', this.#handleMouseMove);
    }

    stopWatch() {
        // Remove the event listener (frees up resources)
        this.state.watchedComponent.removeEventListener('mousemove', this.#handleMouseMove);
    }

    #handleMouseMove(e) {
        this.state.x = e.clientX;
        console.log(this.state.x);

        this.state.y = e.clientY;
        console.log(this.state.y);
    }
}