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
                                <span className="date">February 27, 2016</span>
                                <p>
                                    The same day as Rebekah’s sister Grace’s
                                    engagement party, Rebekah and Ross met at an
                                    Irish pub at the Domain through a mutual
                                    friend who had come to town for the party.
                                    <br />
                                    <br />
                                    The first encounter was short, but Ross was
                                    taken away by Rebekah’s baby blue eyes and
                                    Rebekah left the bar asking her friend about
                                    the cute one with the blonde hair and the
                                    dog. After the engagement party, Rebekah
                                    went back out with her friend for one reason
                                    and one reason only Ross. He asked her out
                                    that very night.
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
                                    Their second first date started at a sushi
                                    restaurant where Rebekah talked so loud Ross
                                    had to apologize to the other diners while
                                    she was in the bathroom. Rebekah’s
                                    outspokenness was welcomed by Ross’ calm
                                    demeanor. They quickly realized that this
                                    was something real. The second date turned
                                    into a third; one year of dating turned into
                                    four and that turned into...
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
                                    Hamilton musical. For Christmas, Ross
                                    surprised Rebekah with tickets to see
                                    Hamilton in New York City! Three years
                                    prior, Ross and Rebekah saw Hamilton in
                                    Chicago and he knew this was the exact way
                                    to sweep her off her feet.
                                    <br />
                                    <br />
                                    Hamilton got Rebekah to New York City, but
                                    that was only the beginning. They had many
                                    sites they wanted to see and things they
                                    wanted to do. On Thursday, March 5, 2020
                                    (after arguring over which deli had the best
                                    bagels), the two walked across the Brooklyn
                                    Bridge. Ross, with a ring tightly grasped in
                                    his coat pocket and Rebekah with a camera in
                                    hand ready for all the selfie opportunities.
                                    <br />
                                    <br />
                                    The two finally made it to the beautiful
                                    Brooklyn Bridge Park. Ross put his coat on
                                    the ground and setup his phone against it
                                    for a timed picture. Except... he turned on
                                    the video. Feigning a countdown for a
                                    picture, Ross took Rebekah's hand, got down
                                    on one knee, and asked her to be his best
                                    friend and love of his life forever. The day
                                    was beautiful, the man was perfect, the girl
                                    was speechless. Shaking and in tears, she
                                    put her hand out for the ring and she said
                                    yes!
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
