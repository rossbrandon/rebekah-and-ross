import React from "react"
import SectionTitle from "../SectionTitle"
import maidOfHonor from "../../images/people/1.jpg"
import maidOfHonorFunny from "../../images/people/1.jpg"
import bestMan from "../../images/people/carter.jpg"
import bestManFunny from "../../images/people/carter-funny.jpg"

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
                                            <img
                                                src={maidOfHonor}
                                                alt="Matron of Honor"
                                                onMouseOver={e =>
                                                    (e.currentTarget.src = maidOfHonorFunny)
                                                }
                                                onMouseOut={e =>
                                                    (e.currentTarget.src = maidOfHonor)
                                                }
                                            />
                                        </div>
                                        <div className="groomsmen-bridesmaid-content">
                                            <h4>Grace Brady</h4>
                                            <span>
                                                Sister & Matron of Honor
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid mx-auto">
                                    <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2 mx-auto">
                                        <div className="groomsmen-bridesmaid-img">
                                            <img
                                                src={bestMan}
                                                alt="Best Man"
                                                onMouseOver={e =>
                                                    (e.currentTarget.src = bestManFunny)
                                                }
                                                onMouseOut={e =>
                                                    (e.currentTarget.src = bestMan)
                                                }
                                            />
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
