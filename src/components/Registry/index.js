import React from "react"
import SectionTitle from "../SectionTitle"
import registry1 from "../../images/registry/logo-bedbathandbeyond.png"
import registry2 from "../../images/registry/logo-crateandbarrel.png"
import "./style.css"

const Registry = () => {
    return (
        <div id="registry" className="section-padding">
            <div className="gift-area">
                <SectionTitle section={"We Are Registered At:"} />
                <div className="container">
                    <div className="row mx-auto d-flex">
                        <div className="col-lg-1 offset-lg-3 col-md-2 offset-md-2 col-sm-2 offset-sm-1">
                            <div className="registry-icon mx-auto d-flex">
                                <a
                                    href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549641357?eventType=Wedding"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={registry1} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-1 offset-lg-2 col-md-2 offset-md-2 col-sm-2 offset-sm-3">
                            <div className="registry-icon mx-auto d-flex">
                                <a
                                    href="https://www.crateandbarrel.com/gift-registry/rebekah-pool-and-ross-brandon/r6190760"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={registry2} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registry
