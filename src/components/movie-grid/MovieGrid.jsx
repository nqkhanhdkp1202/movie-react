import React, { useState, useEffect } from 'react'

import './moviegrid.scss'

import MovieCard from '../movie-card/MovieCard'
import { useParams } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import { OutlineButton } from '../button/Button';
import Input from '../input/Input';

const MovieGrid = props => {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    let { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null
            if (keyword === undefined) {
                const params = {}
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, params);
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, params);
                }
            }
            else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, params);
            }
            setItems(response.data.results);
            setTotalPage(response.data.total_pages);
        }
        getList();
    }, [props.category, keyword])

    const loadMore = async () => {
        let response = null
        if (keyword === undefined) {
            const params = {
                page: page + 1
            }
            switch (props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, params);
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, params);
            }
        }
        else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, params);
        }
        setItems([...items, ...response.data.results]);
        setPage(page + 1);
    }

    return (
        <>
            <div className='movie-grid'>
                {
                    items.map((e, i) => <MovieCard category={props.category} item={e} key={i} />)
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null
            }
        </>
    )
}

const MovieSearch = props => {
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    return (
        <div className="movie-search">
            <Input type="text" placeholder="Enter the keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)}></Input>
        </div>
    )
}

export default MovieGrid