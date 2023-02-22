import React, {useEffect, useRef, useState} from 'react';

import {useNavigate} from "react-router-dom";

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";

import Button, {OutlineButton} from "../button/Button.jsx";

import tmdbApi, {movieType} from "../../api/tmdbApi.js";
import apiConfig from "../../api/apiConfig.js";

import './hero-slide.scss';
import Modal, {ModalContent} from "../modal/Modal.jsx";


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
                                         <HeroSlideItem item={e} className={`${isActive ? 'active' : ''}`}/>
                                     )}/>
                    ))
                }
            </Swiper>
            {
                // movieItems.map((e, i) => <ModalTrailer id={e.id} key={i}/>)
            }
        </div>
    );
};

const HeroSlideItem = props => {
    let navigate = useNavigate();

    let item = props.item;

    let background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)

    return (
        <div className={`hero-slide__item ${props.className}`} style={{backgroundImage: `url(${background})`}}>
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => navigate('/movie/' + item.id)}>Watch Now</Button>
                        <OutlineButton onClick={() => console.log('trailer')}>Watch Trailer</OutlineButton>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt=""/>
                </div>
            </div>
        </div>
    )
}

const ModalTrailer = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose()}>
                <iframe ref={iframeRef} width="100%" height="500px" title="Trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}

export default HeroSlide;