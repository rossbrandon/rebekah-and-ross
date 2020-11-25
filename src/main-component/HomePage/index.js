import React from "react"
import Couple from "../../components/Couple"
import SimpleSlider from "../../components/SimpleSlider"
import Story from "../../components/Story"
import Welcome from "../../components/Welcome"
import People from "../../components/People"
import Events from "../../components/Events"
import Gallery from "../../components/Gallery"
import Registry from "../../components/Registry"
import Header from "../../components/Header"
import MobileMenu from "../../components/MobileMenu"
import CountDownWidget from "../../components/CountDownWidget"

const Homepage = () => {
    return (
        <div>
            <Header />
            <MobileMenu />
            <SimpleSlider />
            <CountDownWidget />
            <Couple />
            <Welcome />
            <Story />
            <People />
            <Events />
            <Gallery />
            <Registry />
        </div>
    )
}

export default Homepage
