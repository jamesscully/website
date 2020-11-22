import * as React from "react";
import {Link} from "react-router-dom";
import GitHubImg from '../../res/img/logos/github_logo_120px.png'
import YoutubeImg from '../../res/img/logos/youtube_logo.png'
import GooglePlayImg from '../../res/img/logos/google_play_logo.png'

import './ProjectPage.css'
import Button from "../Button";
import ProjectRepository from "../../ProjectRepository";
import ScreenshotOverlay from "../ScreenshotOverlay";

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

const GalleryImage = ({image, onCl}) => (
        <img
            className={"gallery-image"}
            src={image}
            alt={""}
            onClick={onCl}
        />
)


export default class ProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.match.params.name,
            screenshotsExpanded: false
        }
    }

    getVideoEmbed(url) {
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


    showImageHighlight = (image, caption) => {
        this.setState(state =>
            ({
                screenshotsExpanded: !state.screenshotsExpanded,
                focusImage: image,
                focusCaption: caption
            })
        )
    }

    render() {

        const { name } = this.state

        const project = ProjectRepository.getProjectById(name)

        // redirect to homepage if id does not match
        if(!project) {
            window.location = "https://www.jwscully.uk"
            return null
        }

        const content = project.pageContent
        const video = this.getVideoEmbed(content.video)

        let banner = null
        let icon   = null
        try {
            banner = require(`../../res/img/projects/${name}/banner.png`)
            icon   = require(`../../res/img/projects/${name}/icon.png`)
        } catch (e) {  }

        const {screenshotsExpanded} = this.state

        return (
            <div id="projectPage">
                <div id="banner">
                    <img
                        src={banner}
                    />
                </div>

                {
                    (screenshotsExpanded) &&
                    <ScreenshotOverlay
                        enabled={screenshotsExpanded}
                        image={this.state.focusImage}
                        onClose={() => {
                            this.setState({screenshotsExpanded: false})
                        }}
                        caption={this.state.focusCaption}
                    />

                }

                <div id="goBack">
                    <Link to={'/'}>
                        <Button text={"Back"}/>
                    </Link>
                </div>


                <div id="projectBody">

                    <div id="projectTitle">
                        {project.title}
                        <div className="subtitle">
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
                                    link={project.github}
                                    image={GitHubImg}
                                /> : null
                        }

                        {(content.video !== "") ?
                                <DetailButton
                                    text={"Demo (YouTube)"}
                                    link={content.video}
                                    image={YoutubeImg}
                                />
                                : null
                        }

                        {
                            (content.app_store && content.app_store !== "") ?
                                <DetailButton
                                    text={"Download from Google Play"}
                                    link={content.app_store}
                                    image={GooglePlayImg}
                                /> : null
                        }

                    </div>

                    {
                        (content.pictures.length > 0) &&
                        <div>
                            <h2>Screenshots</h2>
                            {
                                <div id={"image-container"}>
                                    {
                                        content.pictures.map((image, index) =>
                                            <div
                                                onClick={() =>
                                                    this.showImageHighlight(
                                                        content.pictures[index],
                                                        content.captions[index]
                                                    )
                                                }
                                            >
                                                <GalleryImage
                                                    image={image}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                            }
                        </div>
                    }


                    <h2>Description</h2>

                    <div id="projectText">
                        {
                            content.text
                        }
                    </div>
                </div>
            </div>
        );
    }
}

