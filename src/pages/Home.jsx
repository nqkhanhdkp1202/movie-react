import React from 'react'

import HeroSlide from "../components/hero-slide/HeroSlide.jsx";
import {Link} from "react-router-dom";
import {OutlineButton} from "../components/button/Button.jsx";

const Home = () => {
    return (
        <div>
            <HeroSlide/>
            <div className="container">
                <div className="section mb-3">
                    <h2>
                        Trending Movies
                    </h2>
                    <Link to="/">
                        <OutlineButton className="small">View more</OutlineButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home