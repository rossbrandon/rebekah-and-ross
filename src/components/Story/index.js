import React from "react"
import SectionTitle from "../SectionTitle"
import story1 from "../../images/story/dating.jpg"
import story2 from "../../images/story/zachs-wedding.jpg"
import story3 from "../../images/story/engagement.jpg"
import "./style.css"

const Story = () => {
    return (
        <div id="story" className="story-area section-padding">
            <SectionTitle section={"Our Story"} />
            <div className="container">
                <div className="story-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img">
                                <img src={story1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>How We Met</h3>
                                <span className="date">March ?, 2016</span>
                                <p>
                                    Ross is an Austin tech-scene transplant from
                                    Fayetteville, AR and Rebekah is an tried and
                                    true Austinite. At the time Ross lived in
                                    the Domain. He and a few friends were at the
                                    local Irish pub when a mutual friend
                                    connected our groups. Ross was immediately
                                    struck by Rebekah and asked her out that
                                    very night.
                                    <br />
                                    <br />
                                    (Rebekah needs to inject her side here)
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Our Second First Date</h3>
                                <span className="date">June 3, 2016</span>
                                <p>
                                    Rebekah and Ross did not officially start
                                    dating after their first date. It was their{" "}
                                    <i>second</i> first date that stuck.
                                    <br />
                                    <br />
                                    They quickly realized that this was
                                    something real. They had the most fun with
                                    each other, encouraged each other, and made
                                    each other better and sure enough... that
                                    second date would turn into a third; one
                                    year of dating into four and a proposal to
                                    turn that into a lifetime.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={story2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img">
                                <img src={story3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
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
                                    After arguring over which deli had the best
                                    bagels, they decided to walk across the
                                    Brooklyn Bridge: Ross, with a ring tightly
                                    in his grasp in his coat pocket and Rebekah
                                    with a camera in hand ready for all the
                                    selfie opportunities. The two made it to the
                                    beautiful Brooklyn Bridge Park and Rebekah
                                    wanted a picture. Ross put his coat on the
                                    ground and setup his phone against it for a
                                    timed picture. Except... he turned on the
                                    video. Feigning a countdown for a picture,
                                    Ross took Rebekah's hand, got down on one
                                    knee, and asked her to be his best friend
                                    and love of his life forever.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story
