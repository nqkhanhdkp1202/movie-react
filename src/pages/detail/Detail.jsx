import React, { useEffect, useState } from 'react'

import './detail.scss';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useParams } from 'react-router-dom';
import CastList from './CastList';
import Video from './VideoList';
import VideoList from './VideoList';
import MovieList from '../../components/movie-list/MovieList';

const Detail = () => {

  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const params = {};
      const response = await tmdbApi.detail(category, id, { params });
      setItem(response.data);
      window.scrollTo(0, 0);
    }
    getDetail();
  }, [category, id])

  return (
    <>
      {
        item && (
          <>
            <div className="banner" style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}></div>
            <div className="mb-3 movie-content container">
              <div className="movie-content__poster">
                <div className="movie-content__poster__img" style={{ backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)}` }}></div>
              </div>
              <div className="movie-content__info">
                <div className="title">
                  {item.title || item.name}
                </div>
                <div className="genres">
                  {
                    item.genres && item.genres.slice(0, 5).map((e, i) => (
                      <span className="genres__item" key={i}>{e.name}</span>
                    ))
                  }
                </div>
                <p className="overview">{item.overview}</p>
                <div className="cast">
                  <div className="section__header">
                    <h2>Cast</h2>
                  </div>
                  <CastList id={id} />
                </div>
              </div>
            </div>
            <div className="mb-3 container">
              <VideoList id={id} />
              <div className="section mb-3">
                <div className="section__header mb-2">
                  <h2>Similar</h2>
                </div>
                <MovieList category={category} type="similar" id={item.id} />
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default Detail