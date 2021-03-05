import React, {Component} from 'react'
import EducationBlob from "./EducationBlob";
import '../../../css/EducationBlob.css'


export class EducationSection extends Component {
    render() {
        return (
            <div style={{
                width: "80vw",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column"
            }}>

            <EducationBlob id={"university"}/>
            <EducationBlob id={"college"}/>

            </div>
        )
    }
}
