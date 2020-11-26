import React from "react"
import SectionTitle from "../SectionTitle"
import {WEDDING_DATE_FULL, PARTY_DATE_FULL} from "../../util/constants"
import event1 from "../../images/events/anthony-chapel.jpg"
import event2 from "../../images/events/springdale-station.jpg"

import "./style.css"

const Events = () => {
    return (
        <div id="events" className="event-section section-padding">
            <SectionTitle section={"When & Where"} />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tabs-site-button">
                            <div className="event-tabs">
                                <div className="col-md-12 col-12">
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={event1} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text">
                                                    <h3>Wedding Ceremony</h3>
                                                    <span>
                                                        {WEDDING_DATE_FULL}
                                                    </span>
                                                    <span>
                                                        Anthony Chapel
                                                        <br />
                                                        Garvan Woodland Gardens
                                                        <br />
                                                        Hot Springs, AR
                                                    </span>
                                                    <p>
                                                        Small, intimate,
                                                        immediate family only
                                                        ceremony at the
                                                        beautiful Anthony Chapel
                                                        in the Garvan Woodland
                                                        Gardens.{" "}
                                                    </p>
                                                    <div className="btn">
                                                        <a
                                                            href="https://www.google.com/maps/place/Anthony+Chapel/@34.4355043,-93.0437198,15z/data=!4m5!3m4!1s0x0:0x1357362e97b30e75!8m2!3d34.4355043!4d-93.0437198?hl=en"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Location
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text event-text-2">
                                                    <h3>Wedding Celebration</h3>
                                                    <span>
                                                        {PARTY_DATE_FULL}
                                                    </span>
                                                    <span>
                                                        Springdate Station 979
                                                        <br />
                                                        Springdale Rd Suite #160
                                                        <br />
                                                        Austin, TX
                                                    </span>
                                                    <p>
                                                        Please join us in 2022
                                                        for a (hopefully) more
                                                        normal celebration!{" "}
                                                    </p>
                                                    <div className="btn">
                                                        <a
                                                            href="https://goo.gl/maps/BUi7TBi9NfD2"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Location
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={event2} alt="" />
                                                </div>
                                            </div>
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

export default Events
