import React from "react"
import CountDown from "reactjs-countdown"
import "./style.css"

const CountDownWidget = () => {
    return (
        <div className="saveday">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="countdownwrap">
                            <CountDown deadline="March 22, 2021" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountDownWidget
