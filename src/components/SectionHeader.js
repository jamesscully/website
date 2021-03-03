import React, {Component} from "react";
import './SectionHeader.css'

import EducationBanner from '../res/img/education-banner.png'
import ProjectsBanner from '../res/img/projects-banner.png'
// import IntroBanner from '../res/img/intro-banner.png'

export default class SectionHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: props.text,
            hideDivider: props.hideDivider,
            subject: props.subject
        }
    }

    divider = () => {
        const lineY = "50%"
        const width = "95vw"

        const strokeWidth = 5

        const margin = "24px"
        const marginVert = "10vh"

        const style = {
            marginLeft: margin,
            marginRight: margin,
            height: strokeWidth,
            verticalAlign: "middle",
            textAlign: "center",
            // boxShadow: "0 0 white, 0 0 white, 0 0 50px 2px #2A2A2A",
        }

        const svg =
            <svg
                width={width}
                height={strokeWidth}
                className={"item"}
                style={style}
            >
                <line x1="0"
                      y1={lineY}
                      x2={"100%"}
                      y2={lineY}
                      style={{
                          stroke: "#323232",
                          strokeWidth: strokeWidth,
                      }}
                />
            </svg>


        return(
            svg
        );
    }

    render() {
        const {text, hideDivider, subject} = this.state

        let bannerMap = {
            "education": EducationBanner,
            "projects": ProjectsBanner
        }

        var banner = bannerMap[subject]

        banner = `url('${banner}')`;

        if(subject != null) {
            console.log("subject: " + subject)
            console.log(bannerMap[subject])
        }

        var containerStyle = {
            backgroundImage: banner,

            //  no-repeat fixed center;
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }

        const textStyle = {
            textAlign: "center",
        }

        var divider = this.divider();

        if(hideDivider)
            divider = "";

        return(
            <div id={"section-header-container"} style={containerStyle}>
                {
                    divider
                }

                <div id={"previewImage"} />

                <div id="section-header-text" className={"section-header item text-shadow"} style={textStyle}>
                    { text }
                </div>
            </div>
        )
    }

}
