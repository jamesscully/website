import React from 'react'

import './Card.css'

export default class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icon: props.img,
            text: props.text
        }
    }

    render() {

        console.log(`Icon = ${this.state.icon}`)

        return(
            <div className="icon">
                <img src={this.state.icon} alt={"Test"}/>
                    <div id={"textArea"}>
                        {
                            this.state.text.split('\n').map((item, i) => {
                                    return <p key={i}> {item} </p>
                            })
                        }
                    </div>
            </div>
        )
    }
}
