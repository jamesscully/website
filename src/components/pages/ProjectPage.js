import * as React from "react";
import {Link} from "react-router-dom";
import GitHubImg from '../../res/img/logos/github_logo_120px.png'
import YoutubeImg from '../../res/img/logos/youtube_logo.png'

import './ProjectPage.css'
import Button from "../Button";
import ProjectRepository from "../../ProjectRepository";
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";

// functional component for small buttons below title
const DetailButton = ({link, image, text}) =>
    <a
        href={link}
        className={'detail-button'}
        target={"_blank"}
        rel={"noopener noreferrer"}
    >
        <span>{text}</span>
        <img className={"inline-link-img"} src={image} alt={""}/>
    </a>

export default class ProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.match.params.name
        }
    }

    getVideoEmbed(url) {
        console.log("URL = " + url)

        if(url !== "") {
            return(
                <iframe
                    width="560" height="315"
                    src={url}
                    frameBorder="0"
                    allowFullScreen
                />
            )
        }
        return null
    }

    render() {

        const { name } = this.state

        const project = ProjectRepository.getProjectById(name)
        const content = project.pageContent

        const video = this.getVideoEmbed(content.video)

        let banner = null
        let icon   = null
        try {
            banner = require(`../../res/img/projects/${name}/banner.png`)
            icon   = require(`../../res/img/projects/${name}/icon.png`)
        } catch (e) { console.log(e) }


        return (
            <div id="projectPage">
                <div id="banner">
                    <img
                        src={banner}
                    />
                </div>

                <div id="goBack">
                    <Link to={'/'}>
                        <Button text={"Back"}/>
                    </Link>
                </div>


                <div id="projectBody">

                    <div id="projectTitle">
                        {project.title}
                        <div id="projectSubtitle">
                            {
                                project.stack.map((tag) => {
                                    return <span>{tag}, </span>
                                })
                            }
                        </div>
                    </div>

                    <div id="projectDetails">

                        {/* Only render buttons if their sources exist */}

                        {(project.github !== "") ?
                                <DetailButton
                                    text={"View Source (GitHub)"}
                                    link={project.github} image={GitHubImg}
                                /> : null
                        }

                        {(content.video !== "") ?
                                <DetailButton
                                    text={"Demo (YouTube)"}
                                    link={content.video} image={YoutubeImg}
                                />
                                : null
                        }

                    </div>

                    <div id="projectText">
                        <h2>Description</h2>
                        {
                            content.text
                        }
                    </div>
                </div>
            </div>
        );
    }
}

