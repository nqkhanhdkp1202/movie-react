import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const CastList = props => {

    const { category, id } = useParams();

    const [casts, setCasts] = useState(null);

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(category, id);
            setCasts(response.data.cast.slice(0, 5))
        }
        getCredits();
    }, [category, id])

    return (
        <div className="casts mb-3">{
            casts && casts.slice(0, 5).map((e, i) => (
                <div className="casts__item" key={i}>
                    <div className="casts__item__img" style={{ backgroundImage: `url(${apiConfig.w500Image(e.profile_path)})` }}></div>
                    <p className="casts__item__name">{e.name}</p>
                </div>
            ))
        }</div>
    )
}


export default CastList