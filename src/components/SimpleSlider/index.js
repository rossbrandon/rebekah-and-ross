import React, { Component } from 'react'
import { Animated } from 'react-animated-css'
import Slider from 'react-slick'
import { WEDDING_DATE } from 'utils/constants'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'

class SimpleSlider extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2500,
            fade: true,
        }
        return (
            <Slider {...settings}>
                <div id="home" className="item1">
                    <div className="container">
                        <div className="slide-content">
                            <div className="slide-title">
                                <h2>We're Getting Married!</h2>
                            </div>
                            <div className="slide-text">
                                <p>{WEDDING_DATE}</p>
                            </div>
                            <Animated>
                                <div className="animated-circle"></div>
                            </Animated>
                        </div>
                    </div>
                </div>
                <div className="item2">
                    <div className="container">
                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>We're Getting Married!</h2>
                                </div>
                                <div className="slide-text">
                                    <p>{WEDDING_DATE}</p>
                                </div>
                                <Animated>
                                    <div className="animated-circle"></div>
                                </Animated>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
}

export default SimpleSlider
