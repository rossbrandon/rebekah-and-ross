import React from "react"
import {NAME_SHORT} from "../../util/constants"
import "./style.css"

const Footer = () => {
    return (
        <div className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="text">
                        <h2>{NAME_SHORT}</h2>
                        <p>We can't wait to celebrate with you in 2022!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
