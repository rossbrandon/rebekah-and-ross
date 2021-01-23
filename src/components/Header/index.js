import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import StickyHeader from 'react-sticky-header'
import { NAME_SHORT } from 'utils/constants'

import 'react-sticky-header/styles.css'
import './style.css'

const Header = () => {
    return (
        <StickyHeader
            header={
                <div className="Header_root">
                    <div className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="logo">
                                        <h2>
                                            <AnchorLink href="#home">
                                                {NAME_SHORT}
                                            </AnchorLink>
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="header-menu d-lg-block d-none">
                                        <ul className="mobile-menu d-flex">
                                            <li>
                                                <AnchorLink href="#home">
                                                    Home
                                                </AnchorLink>
                                            </li>
                                            <li>
                                                <AnchorLink href="#us">
                                                    Us
                                                </AnchorLink>
                                            </li>
                                            <li>
                                                <AnchorLink href="#story">
                                                    Our Story
                                                </AnchorLink>
                                            </li>
                                            <li>
                                                <AnchorLink href="#wedding-party">
                                                    Wedding Party
                                                </AnchorLink>
                                            </li>
                                            <li>
                                                <AnchorLink href="#events">
                                                    Events
                                                </AnchorLink>
                                            </li>
                                            <li>
                                                <AnchorLink href="#gallery">
                                                    Gallery
                                                </AnchorLink>
                                            </li>
                                            <li>
                                                <AnchorLink href="#registry">
                                                    Registry
                                                </AnchorLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        ></StickyHeader>
    )
}

export default Header
