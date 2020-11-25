import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./style.css"

const Welcome = () => {
    return (
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Welcome to our big day</h2>
                            <p>
                                Due to COVID-19 precautions, we will
                                unfortunately not be inviting guests to our
                                wedding ceremony.
                                <br /> <br />
                                However, we will be hosting a party for everyone
                                to join in on our celebration in 2022! Please
                                click the Events button below for details!
                            </p>
                            <div className="btn">
                                <AnchorLink href="#event">Events</AnchorLink>
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
