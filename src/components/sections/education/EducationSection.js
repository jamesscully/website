import React, {Component} from 'react'
import EducationBlob from "./EducationBlob";
import './Education.css'


export class EducationSection extends Component {
    render() {
        return (
            <div id={"Section"}>

            <EducationBlob id={"university"}/>
            <EducationBlob id={"college"}/>

            </div>
        )
    }
}
