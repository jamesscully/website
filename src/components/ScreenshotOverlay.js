import React from 'react'
import './ScreenshotOverlay.css'

export default class ScreenshotOverlay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enabled: props.enabled,
            image: props.image,
            onClose: props.onClose
        }
    }

    disable = () => {
        this.setState({enabled: false})
        this.state.onClose()
    }

    render() {

        console.log(`Rendering, state: ${this.state.enabled}`)

        const {image} = this.state

        return( this.state.enabled &&
            <div id={"screenshot-overlay"} onClick={this.disable}>

                <div id={"screenshot-overlay-container"}>
                    <img
                        id={"screenshot-overlay-image"}
                        src={image}
                        onClick={null}
                    />
                    <p id={"screenshot-overlay-caption"}>
                        Test Caption
                    </p>
                </div>
                <button
                    id={"screenshot-overlay-close"}
                    onClick={this.disable}
                >
                    Close
                </button>
            </div>
        )
    }
}
