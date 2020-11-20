import React from "react";
import {animated, config, Spring} from "react-spring/renderprops";

import ForwardIcon from '../res/img/forward.png'
import ExpandIcon from '../res/img/expand.png'

import './Button.css'


// onClick  - Takes a lambda for onClick functionality
// inverted - flips the icon/text used for this button
// text     - text when not inverted
// altText  - text when inverted

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onClick: props.onClick,
            text   : props.text,
            altText: props.altText,
            className : props.className,
            hovered : false,
            iconName: props.iconName,
            inverted: props.inverted
        }

        if(props.iconName == null) {
            this.setState({iconName: 'forward'})
        }
    }

    getIcon() {
        let iconType = this.state.iconName

        switch (iconType) {
            case 'drop':
                return ExpandIcon

            default:
            case 'forward':
                return ForwardIcon
        }
    }

    onClick = () => {

        // only call if we have an onClick
        if(this.state.onClick) {
            this.state.onClick()

            this.setState({
                inverted: !this.state.inverted
            })
        }
    }

    setHovered = (bool) => {
        this.setState({
            hovered: bool
        })
    }

    render() {
        const {text, altText, className, hovered, inverted} = this.state
        const classes = 'button ' + className

        let imageStyle = null

        if(this.state.iconName === 'forward') {
            imageStyle = { transform: inverted ? 'rotate(180deg)' : 'rotate(0deg)' }
        }

        // which text we will use
        const outText = (inverted && altText != null) ? altText : text

        return(
            <div>
                {
                    // slowly change width and margin for spring-y effect
                }
                <Spring
                    native
                    force
                    config={config.gentle}
                    from={{
                        width:      hovered ? '0px' : '20px',
                        marginLeft: hovered ? '0em' : '0.5em',
                        transform:  hovered ? 'rotate(180deg)' : 'rotate(0deg)',
                        opacity:    hovered ? 0 : 1
                    }}

                    to={{
                        width:      hovered ? '20px' : '0px',
                        marginLeft: hovered ? '0.5em' : '0em',
                        transform:  hovered ? 'rotate(0deg)': 'rotate(180deg)',
                        opacity:    hovered ? 1 : 0
                    }}
                >
                    {
                        props => (
                            <animated.div
                                className={classes}
                                onClick={this.onClick}
                                onMouseEnter={() => {this.setHovered(true)}  }
                                onMouseLeave={() => {this.setHovered(false)} }
                            >
                                {outText}

                                <animated.div className={"buttonImg"} style={props}>
                                    <img src={this.getIcon()} style={imageStyle}  alt={""} className={'invert'}/>
                                </animated.div>

                            </animated.div>
                        )
                    }

                </Spring>
            </div>
        )
    }
}
