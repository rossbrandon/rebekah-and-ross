import event1 from 'images/events/anthony-chapel.jpg'
import event2 from 'images/events/springdale-station-inside.jpg'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { PARTY_DATE_FULL, WEDDING_DATE_FULL } from 'utils/constants'

import './style.css'

import SectionTitle from '../SectionTitle'

const Events = () => {
    return (
        <div id="events" className="event-section section-padding">
            <SectionTitle section={'When & Where'} />
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
                                                        When COVID-19 makes you
                                                        change your wedding
                                                        plans, you make it a
                                                        destination! We will be
                                                        having an intimate,
                                                        immediate-family-only
                                                        ceremony at the
                                                        beautiful Anthony Chapel
                                                        in the Garvan Woodland
                                                        Gardens. Please check
                                                        this website at a later
                                                        date for photos of our
                                                        magical day.
                                                    </p>
                                                    <div className="btn">
                                                        <a
                                                            href="https://www.garvangardens.org/weddings/anthony_chapel/default.aspx"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Info
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
                                                        Springdate Station
                                                        <br />
                                                        979 Springdale Road #160
                                                        <br />
                                                        Austin, TX
                                                    </span>
                                                    <p>
                                                        Please join us for the
                                                        greatest
                                                        one-year-anniversary-celebration-bash
                                                        at our original wedding
                                                        venue, Springdale
                                                        Station on weekend of
                                                        our original wedding
                                                        date!
                                                    </p>
                                                    <div className="btn">
                                                        <a
                                                            href="https://springdalestation.com/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Info
                                                        </a>
                                                    </div>
                                                    <div className="btn">
                                                        <a
                                                            href="https://goo.gl/maps/BUi7TBi9NfD2"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Location
                                                        </a>
                                                    </div>
                                                    <div className="btn">
                                                        <AnchorLink href="#rsvp">
                                                            RSVP
                                                        </AnchorLink>
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
