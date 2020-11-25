import React from "react"
import SectionTitle from "../SectionTitle"
import couple1 from "../../images/couple/rebekah.jpg"
import couple2 from "../../images/couple/ross.png"
import "./style.css"

const Couple = () => {
    return (
        <div id="couple" className="about-wrap">
            <div className="couple-area section-padding">
                <SectionTitle section={"R & R"} />
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img src={couple1} alt="thumb" />
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Rebekah Pool</h3>
                                            <p>
                                                Hi! I am Rebekah Pool! Here's a
                                                little about me...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img src={couple2} alt="thumb" />
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Ross Brandon</h3>
                                            <p>
                                                Hi! I am Ross Brandon! Here's a
                                                little about me...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Couple
