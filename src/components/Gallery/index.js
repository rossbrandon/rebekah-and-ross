import React, {Component} from "react"
import ReactFancyBox from "react-fancybox"
import "react-fancybox/lib/fancybox.css"
import SectionTitle from "../SectionTitle"
import "./style.css"

import gallery1 from "../../images/gallery/gallery-1.jpg"
import gallery2 from "../../images/gallery/gallery-2.jpg"
import gallery3 from "../../images/gallery/gallery-3.jpg"
import gallery4 from "../../images/gallery/img-4.jpg"
import gallery5 from "../../images/gallery/img-5.jpg"
import gallery6 from "../../images/gallery/img-6.jpg"

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
                </div>
            </div>
        )
    }
}

export default Gallery
