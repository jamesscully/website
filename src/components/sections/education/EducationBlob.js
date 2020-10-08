import React, {Component} from 'react'
import {educationData} from '../../../data/education'
import './Education.css'

const images = require.context('../../../res/img/edu', true);

export default class EducationBlob extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: props.id,
            expanded: false,
            modules: false
        }
    }

    render() {

        let object = educationData[this.state.key]
        let image = images(`./${this.state.key}.png`)
        let date = object['date']
        let name = object['name']
        let grade = object['grade']
        let course = object['course']
        let description = object['description']

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
                    }}>Read More</div>
                </div>


            </div>
        );
    }
}
