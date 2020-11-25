import React from "react"
import {Animated} from "react-animated-css"
import classes from "../../css/BackgroundVideo.module.css"
import {WEDDING_DATE_SHORT} from "../../util/constants"

const BackgroundVideo = () => {
    const videoSource =
        "https://static.videezy.com/system/resources/previews/000/038/390/original/17_050_01.mp4"
    return (
        <div className="vedio-area" id="home">
            <div className={classes.Container}>
                <video
                    autoPlay="autoplay"
                    loop="loop"
                    muted
                    className={classes.Video}
                >
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className={classes.Content}>
                    <div className="slide-b">
                        <div className="slide-content">
                            <div className="slide-subtitle">
                                <h4>WERE GETTING MARRIED</h4>
                            </div>
                            <div className="slide-title">
                                <h2>Save Our Date</h2>
                            </div>
                            <div className="slide-text">
                                <p>{WEDDING_DATE_SHORT}</p>
                            </div>
                            <Animated>
                                <div className="animated-circle"></div>
                            </Animated>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo
