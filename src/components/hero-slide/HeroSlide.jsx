import React, {useEffect, useState} from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";

import tmdbApi, {movieType} from "../../api/tmdbApi.js";
import apiConfig from "../../api/apiConfig.js";


const HeroSlide = () => {

    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, params);
                setMovieItems(response.data.results);
                console.log(response.data.results);
            } catch (err) {
                console.log(err);
            }
        }
        getMovies();
    }, [])

    return (
        <div className="hero-slide">
            <Swiper slidesPerView={1} grabCursor={true} modules={Autoplay} spaceBetween={0} autoplay={{delay: 3000}}>
                {
                    movieItems.slice(0, 4).map((e, i) => (
                        <SwiperSlide key={i}
                                     children={({isActive}) => (
                                         <img src={apiConfig.originalImage(e.backdrop_path)}/>)}/>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default HeroSlide;