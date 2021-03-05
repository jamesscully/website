import React from 'react'
import '../css/ScreenshotOverlay.css'

export default class ScreenshotOverlay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enabled: props.enabled,
            image: props.image,
            onClose: props.onClose,
            caption: props.caption
        }
        console.log(this.state.caption)
    }

    disable = () => {
        this.setState({enabled: false})
        this.state.onClose()
    }

    render() {

        console.log(`Rendering, state: ${this.state.enabled}`)

        const {image, caption} = this.state

        return( this.state.enabled &&
            <div id={"screenshot-overlay"} onClick={this.disable}>

                <div id={"screenshot-overlay-container"}>
                    <img
                        id={"screenshot-overlay-image"}
                        src={image}
                        onClick={null}
                        alt={""}
                    />
                    {
                        (caption) &&
                        <p id={"screenshot-overlay-caption"}>
                            {caption}
                        </p>
                    }

                </div>
                <div
                    id={"screenshot-overlay-close"}
                    className={"button"}
                    onClick={this.disable}
                >
                    Close
                </div>
            </div>
        )
    }
}
