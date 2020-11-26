import React, {Component} from "react"
import ReactFancyBox from "react-fancybox"
import SectionTitle from "../SectionTitle"
import "react-fancybox/lib/fancybox.css"
import "./style.css"

import gallery1 from "../../images/gallery/zachs-wedding.jpg"
import gallery2 from "../../images/gallery/williams-wedding.jpg"
import gallery3 from "../../images/gallery/lake-hug.png"
import gallery4 from "../../images/gallery/cayman-islands.jpg"
import gallery5 from "../../images/gallery/chicago.jpg"
import gallery6 from "../../images/gallery/trail-of-lights.jpg"
import gallery7 from "../../images/gallery/champagne.jpg"
import gallery8 from "../../images/gallery/graces-wedding.jpg"
import gallery9 from "../../images/gallery/deborahs.jpg"
import gallery10 from "../../images/gallery/acl.jpg"
import gallery11 from "../../images/gallery/big-cedar.jpg"
import gallery12 from "../../images/gallery/photo-van.jpg"

class Gallery extends Component {
    render() {
        return (
            <div id="gallery" className="Gallery-section section-padding">
                <SectionTitle section={"Our Gallery"} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={gallery1}
                                    image={gallery1}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={gallery2}
                                    image={gallery2}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={gallery3}
                                    image={gallery3}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={gallery4}
                                    image={gallery4}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={gallery5}
                                    image={gallery5}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={gallery6}
                                    image={gallery6}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={gallery7}
                                    image={gallery7}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={gallery8}
                                    image={gallery8}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={gallery9}
                                    image={gallery9}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={gallery10}
                                    image={gallery10}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={gallery11}
                                    image={gallery11}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="gallery-img">
                                <ReactFancyBox
                                    thumbnail={gallery12}
                                    image={gallery12}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery
