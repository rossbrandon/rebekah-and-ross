import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'

import CountDownWidget from '../../components/CountDownWidget'
import Events from '../../components/Events'
import Gallery from '../../components/Gallery'
import Header from '../../components/Header'
import MobileMenu from '../../components/MobileMenu'
import Registry from '../../components/Registry'
import Rsvp from '../../components/Rsvp'
import SimpleSlider from '../../components/SimpleSlider'
import Story from '../../components/Story'
import Us from '../../components/Us'
import WeddingParty from '../../components/WeddingParty'
import Welcome from '../../components/Welcome'

const Homepage = () => {
    return (
        <div>
            <Header />
            <MobileMenu />
            <SimpleSlider />
            <CountDownWidget />
            <Us />
            <Welcome />
            <Story />
            <WeddingParty />
            <Events />
            <SimpleReactLightbox>
                <Gallery />
            </SimpleReactLightbox>
            <Registry />
            <Rsvp />
        </div>
    )
}

export default Homepage
