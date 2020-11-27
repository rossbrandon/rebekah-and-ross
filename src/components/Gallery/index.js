import React, {Component} from "react"
import {SRLWrapper} from "simple-react-lightbox"
import SectionTitle from "../SectionTitle"
import "./style.css"

import gallery1 from "../../images/gallery/graces-wedding.jpg"
import gallery2 from "../../images/gallery/lake-hug.png"
import gallery3 from "../../images/gallery/cayman-islands.jpg"
import gallery4 from "../../images/gallery/chicago.jpg"
import gallery5 from "../../images/gallery/trail-of-lights.jpg"
import gallery6 from "../../images/gallery/skiing.jpg"
import gallery7 from "../../images/gallery/champagne.jpg"
import gallery8 from "../../images/gallery/williams-wedding.jpg"
import gallery9 from "../../images/gallery/deborahs.jpg"
import gallery10 from "../../images/gallery/acl.jpg"
import gallery11 from "../../images/gallery/big-cedar.jpg"
import gallery12 from "../../images/gallery/photo-van.jpg"

class Gallery extends Component {
    render() {
        return (
            <div id="gallery" className="Gallery-section section-padding">
                <SectionTitle section={"Our Gallery"} />
                <SRLWrapper>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="gallery-img">
                                    <a href={gallery1} data-attribute="SRL">
                                        <img
                                            src={gallery1}
                                            alt="Rebekah's sister Grace's wedding. Their first major event together!"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="gallery-img">
                                    <a href={gallery2} data-attribute="SRL">
                                        <img src={gallery2} alt="Lake Hug" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="gallery-img">
                                    <a href={gallery3} data-attribute="SRL">
                                        <img
                                            src={gallery3}
                                            alt="In the Cayman Islands"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="gallery-img">
                                    <a href={gallery4} data-attribute="SRL">
                                        <img
                                            src={gallery4}
                                            alt="Chicago vacation!"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="gallery-img">
                                    <a href={gallery5} data-attribute="SRL">
                                        <img
                                            src={gallery5}
                                            alt="Austin Trail of Lights"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="gallery-img">
                                    <a href={gallery6} data-attribute="SRL">
                                        <img
                                            src={gallery6}
                                            alt="Skiing at Squaw Valley"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="gallery-img">
                                    <a href={gallery7} data-attribute="SRL">
                                        <img
                                            src={gallery7}
                                            alt="Champagne Cheers!"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="gallery-img">
                                    <a href={gallery8} data-attribute="SRL">
                                        <img
                                            src={gallery8}
                                            alt="Together at Ross's cousin's wedding"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="gallery-img">
                                    <a href={gallery9} data-attribute="SRL">
                                        <img
                                            src={gallery9}
                                            alt="Outdoor fun at Rebekah's aunt's in Johnson City"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="gallery-img">
                                    <a href={gallery10} data-attribute="SRL">
                                        <img
                                            src={gallery10}
                                            alt="Chillin' at Austin City Limits"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="gallery-img">
                                    <a href={gallery11} data-attribute="SRL">
                                        <img
                                            src={gallery11}
                                            alt="Big Cedar Lodge in Branson, MO"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="gallery-img">
                                    <a href={gallery12} data-attribute="SRL">
                                        <img
                                            src={gallery12}
                                            alt="Not a photo-booth. A Photo-Van!"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SRLWrapper>
            </div>
        )
    }
}

export default Gallery
