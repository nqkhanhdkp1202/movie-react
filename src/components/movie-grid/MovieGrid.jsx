import React, { useState, useEffect } from 'react'

import './moviegrid.scss'

import MovieCard from '../movie-card/MovieCard'
import { useParams } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';

const MovieGrid = props => {

    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    let { keyword } = useParams();

    console.log(keyword);

    useEffect(() => {
        const getList = async () => {
            let response = null
            if (keyword === undefined) {
                const params = {}
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, { params });
                }
            }
            else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, { params });
            }
            setItems(response.data.results);
            setTotalPage(response.data.total_pages);
        }
        getList();
    }, [props.category, keyword])


    return (
        <div className='movie-grid'>
            {
                items.map((e, i) => <MovieCard category={props.category} item={e} key={i} />)
            }
        </div>
    )
}

export default MovieGrid