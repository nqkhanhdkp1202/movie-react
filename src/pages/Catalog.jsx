import React from 'react'
import PagesHeadline from '../components/pages-headline/PagesHeadline'

import { category as cate } from '../api/tmdbApi'
import { useParams } from 'react-router-dom'
import MovieGrid from '../components/movie-grid/MovieGrid'

const Catalog = () => {

  const { category } = useParams();

  return (
    <div>
      <PagesHeadline>{category === cate.movie ? 'Movies' : 'TV Series'}</PagesHeadline>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid />
        </div>
      </div>
    </div>
  )
}

export default Catalog