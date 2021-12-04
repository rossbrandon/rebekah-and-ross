import React from 'react'
import CountDown from 'reactjs-countdown'
import { PARTY_DATE_TIME } from 'utils'

import './style.css'

const CountDownWidget = () => {
    return (
        <div className="saveday">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="countdownwrap">
                            <CountDown deadline={PARTY_DATE_TIME} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountDownWidget
