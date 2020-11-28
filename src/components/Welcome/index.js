import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import {WEDDING_DATE} from "../../util/constants"
import "./style.css"

const Welcome = () => {
    return (
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Our Big Day</h2>
                            <p>
                                Out of an abundance of caution we will be having
                                a private wedding ceremony. While we wish we
                                could celebrate this special day with all of our
                                friends and family, we just can't wait to say ‘I
                                do’ and make it official! Please hold us in your
                                hearts on {WEDDING_DATE} (Yes, a Monday!) as we
                                make our vows to one another.
                                <br />
                                <br />
                                Don't worry, we will still be hosting a party to
                                celebrate our marriage together. Please click
                                the Events button below for details!
                                <br />
                                <br />
                                We appreciate your continued love and support,
                                it means more than you know.
                            </p>
                            <div className="btn">
                                <AnchorLink href="#events">Events</AnchorLink>
                            </div>
                            )
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
