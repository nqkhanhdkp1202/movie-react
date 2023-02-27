import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import tmdbApi from '../../api/tmdbApi';
import { useParams } from 'react-router-dom';

const VideoList = props => {

    const { category } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const response = await tmdbApi.getVideos(category, props.id);
            setVideos(response.data.results)
        }
        getVideos();
    }, [category, props.id])


    return (
        <>
            {
                videos && videos.slice(0, 3).map((e, i) => (
                    <Video key={i} item={e}></Video>
                ))
            }
        </>
    )
}

const Video = props => {

    const item = props.item

    const iframeRef = useRef(null);

    useEffect(() => {
        let height = iframeRef.current.offsetWidth * 9 / 16 + "px";
        iframeRef.current.setAttribute('height', height);
    }, [])


    return (
        <div className="video mb-3">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe src={`https://www.youtube.com/embed/${item.key}`} width="100%" title="Video" ref={iframeRef}></iframe>
        </div >
    )
}

export default VideoList