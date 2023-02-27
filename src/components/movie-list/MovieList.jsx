import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './movielist.scss'

import tmdbApi, { category } from '../../api/tmdbApi';

import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from '../movie-card/MovieCard';

const MovieList = props => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getList = async () => {
            const params = {};
            let response = null;
            if (props.type !== "similar") {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, { params });
                }
            }
            else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.data.results);
        }
        getList();
    }, [])



    return (
        <div className='movie-list'>
            <Swiper grabCursor={true} slidesPerView={'auto'} spaceBetween={20}>
                {
                    items.map((e, i) => (<SwiperSlide key={i}>
                        <MovieCard category={props.category} item={e}></MovieCard>
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    );
};


MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}


export default MovieList