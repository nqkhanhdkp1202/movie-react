import React from 'react'
import { Link } from "react-router-dom";


import HeroSlide from "../components/hero-slide/HeroSlide.jsx";
import { OutlineButton } from "../components/button/Button.jsx";

import MovieList from '../components/movie-list/MovieList.jsx';
import { category, movieType, tvType } from '../api/tmdbApi.js';

const Home = () => {
    return (
        <div>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>
                            Trending Movies
                        </h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>
                            Trending TV
                        </h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>
                            Top Rated Movies
                        </h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </div>
            </div>
        </div>
    )
}

export default Home