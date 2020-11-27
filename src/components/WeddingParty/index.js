import React from "react"
import SectionTitle from "../SectionTitle"
import maidOfHonor from "../../images/people/grace.jpg"
import maidOfHonorFunny from "../../images/people/grace-funny.jpg"
import bestMan from "../../images/people/carter.jpg"
import bestManFunny from "../../images/people/carter-funny.jpg"

import "./style.css"

const WeddingParty = () => {
    return (
        <section id="wedding-party">
            <div className="wedding-party-area section-padding">
                <SectionTitle section={"Bridesmaids & Groomsmen"} />
                <div className="container">
                    <div className="wedding-party-area-menu">
                        <div className="Groomsman-wrap">
                            <div className="row">
                                <div className="col-lg-5 col-md-6 col-sm-6 grid mx-auto">
                                    <div className="wedding-party-wrap">
                                        <div className="wedding-party-img">
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
                                        <div className="wedding-party-content">
                                            <h3>Grace Brady</h3>
                                            <strong>
                                                Sister & Matron of Honor
                                            </strong>
                                            <p>
                                                The question of who is stronger
                                                is always in debate. History has
                                                proven Rebekah can take Grace in
                                                a fight.
                                                <br />
                                                <br />
                                                Grace and Rebekah's friendship
                                                and bond has been one of the
                                                greatest gifts "growing up" has
                                                offered. After college, Grace
                                                and Rebekah became roommates and
                                                they absolutely loved it!
                                                Rebekah will never forget the
                                                days they didn't have a dish
                                                washer and the nights they ate
                                                Totinos party pizzas (still do!)
                                                and stayed up late learning the
                                                lyrics to the Frozen Soundtrack.
                                                Grace is Rebekah's best friend
                                                and confidant. Rebekah is so
                                                lucky.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-6 grid mx-auto">
                                    <div className="wedding-party-wrap wedding-party-wrap-2 mx-auto">
                                        <div className="wedding-party-img">
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
                                        <div className="wedding-party-content">
                                            <h3>Carter Brandon</h3>
                                            <strong>Brother & Best Man</strong>
                                            <p>
                                                Ross and Carter are 5 years
                                                apart and haven't always seen
                                                eye to eye. Literally: Carter is
                                                4 inches taller than his older
                                                brother. As the years
                                                progressed, Carter stopped
                                                pretending to fall over hurt
                                                while playing baseball in the
                                                front yard and the two became
                                                the best of friends.
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

export default WeddingParty
