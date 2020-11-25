import React from "react"
import SectionTitle from "../SectionTitle"
import bride1 from "../../images/groomsmen-bridesmaid/1.jpg"
import bride2 from "../../images/groomsmen-bridesmaid/2.jpg"

import "./style.css"

const People = () => {
    return (
        <section id="people">
            <div className="groomsmen-bridesmaid-area section-padding">
                <SectionTitle section={"Bridesmaids & Groomsmen"} />
                <div className="container">
                    <div className="groomsmen-bridesmaid-area-menu">
                        <div className="Groomsman-wrap">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 grid mx-auto">
                                    <div className="groomsmen-bridesmaid-wrap">
                                        <div className="groomsmen-bridesmaid-img">
                                            <img src={bride1} alt="bride" />
                                        </div>
                                        <div className="groomsmen-bridesmaid-content">
                                            <h4>Grace Brady</h4>
                                            <span>Sister & Maid of Honor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid mx-auto">
                                    <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2 mx-auto">
                                        <div className="groomsmen-bridesmaid-img">
                                            <img src={bride2} alt="bride" />
                                        </div>
                                        <div className="groomsmen-bridesmaid-content">
                                            <h4>Carter Brandon</h4>
                                            <span>Brother & Best Man</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default People
