import React, {Component} from 'react'
import {EducationData} from '../../../data/education'
import './Education.css'

const images = require.context('../../../res/img/edu', true);

export default class EducationBlob extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: props.id,
            expanded: false,
            modules: false
        }
    }

    render() {
        let object = EducationData[this.state.key]
        let image = images(`./${this.state.key}.png`)
        let date = object['date']
        let name = object['name']
        let grade = object['grade']
        let course = object['course']
        let description = object['description']

        // update text for expansion of blob
        let buttonText = "Expand"
        if(this.state.expanded) {
            buttonText = "Collapse"
        }

        return(
            <div className={"EducationBlob"}>


                <div id={"BlobImage"}>
                    <img src={image} alt={"Logo"}/>
                </div>

                <div id={"BlobContent"}>

                    <span id={"institution"}>
                        {name}

                        <span id={"date"}>
                            Graduated {date}
                        </span>
                    </span>



                    <span id={"course"}>
                        {course}, <br/>
                        <span id={"grade"}> {grade} </span>
                    </span>
                    <p>
                        {
                            description.split('\n\n').map((item, i) => {
                                if(this.state.expanded)
                                    return <p key={i}> {item} </p>
                                else
                                    return null
                            })
                        }
                    </p>

                    <div id="button_expand" className={'check-button'} onClick={() => {
                        this.setState({
                            expanded: !this.state.expanded
                        })
                    }}>
                        {buttonText}
                    </div>
                </div>


            </div>
        );
    }
}
