import React from "react"
import SectionTitle from "../SectionTitle"
import story1 from "../../images/story/dating.jpg"
import story2 from "../../images/story/engagement-2.jpg"
import "./style.css"

const Story = () => {
    return (
        <div id="story" className="story-area section-padding">
            <SectionTitle section={"Our Story"} />
            <div className="container">
                <div className="story-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={story1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Our Second First Date</h3>
                                <span className="date">June 3, 2016</span>
                                <p>
                                    Rebekah and Ross did not start officially
                                    dating after their first date. It was their
                                    SECOND first date that stuck.
                                    <br />
                                    <br />
                                    Little did they know that one date would
                                    turn into two. One year of dating into four
                                    and a proposal for a lifetime.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Our Engagement</h3>
                                <span className="date">March 5, 2020</span>
                                <p>
                                    It is no secret that Rebekah loves the
                                    Hamilton musical. Rebekah and Ross had seen
                                    Hamilton together once in Chicago in 2017,
                                    but never on Broadway where it all began.
                                    Knowing this, Ross surpised Rebekah with
                                    Hamilton tickets in New York City for
                                    Christmas. All with a hidden agenda...
                                    <br />
                                    <br />
                                    After walking the Brooklyn Bridge with a
                                    ring tightly in his grasp, Ross proposed
                                    unexpectedly in the Brooklyn Bridge Park in
                                    NYC!{" "}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img">
                                <img src={story2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story
