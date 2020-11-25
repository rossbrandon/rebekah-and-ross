import React from "react"
import {Link} from "react-router-dom"
import Sectiontitle from "../SectionTitle"
import bride1 from "../../images/groomsmen-bridesmaid/1.jpg"
import bride2 from "../../images/groomsmen-bridesmaid/2.jpg"

import "./style.css"

const People = () => {
    return (
        <section id="people">
            <div className="groomsmen-bridesmaid-area section-padding">
                <Sectiontitle section={"Bridesmaids & Groomsmen"} />
                <div className="container">
                    <div className="groomsmen-bridesmaid-area-menu">
                        <div className="Groomsman-wrap">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 grid">
                                    <div className="groomsmen-bridesmaid-wrap">
                                        <div className="groomsmen-bridesmaid-img">
                                            <img src={bride1} alt="bride" />
                                            <div className="social-list">
                                                <ul className="d-flex">
                                                    <li>
                                                        <Link to="/">
                                                            <span className="fa fa-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <span className="fa fa-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <span className="fa fa-linkedin"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <span className="fa fa-pinterest"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="groomsmen-bridesmaid-content">
                                            <h4>Grace Brady</h4>
                                            <span>Sister & Maid of Honor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 grid">
                                    <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                                        <div className="groomsmen-bridesmaid-img">
                                            <img src={bride2} alt="bride" />
                                            <div className="social-list">
                                                <ul className="d-flex">
                                                    <li>
                                                        <Link to="/">
                                                            <span className="fa fa-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <span className="fa fa-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <span className="fa fa-linkedin"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <span className="fa fa-pinterest"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
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
