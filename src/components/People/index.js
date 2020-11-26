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
                                <div className="col-lg-5 col-md-6 col-sm-6 grid mx-auto">
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
                                            <h3>Grace Brady</h3>
                                            <strong>
                                                Sister & Matron of Honor
                                            </strong>
                                            <p>
                                                Super tearjerker loving text
                                                goes here. It's incoming from
                                                Rebekah any day now......
                                                <br />
                                                <br />
                                                Any... day...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-6 grid mx-auto">
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
                                            <h3>Carter Brandon</h3>
                                            <strong>Brother & Best Man</strong>
                                            <p>
                                                Ross and Carter are 5 years
                                                apart and haven't always seen
                                                eye to eye; literally. Carter is
                                                4 inches taller that his older
                                                brother. As the years
                                                progressed, Carter stopped
                                                falling over pretending he was
                                                hurt while playing baseball in
                                                the front yard to get Ross in
                                                trouble and the two became close
                                                friends.
                                                <br />
                                                <br />
                                                Although Carter lives in Kansas
                                                City, MO and Ross in Austin, TX,
                                                Ross didn't want anyone else by
                                                his side on this day.
                                            </p>
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
