import React from 'react';
import {Link} from "react-router-dom";

import "./footer.scss";

import bg from "../../assets/footer-bg.jpg";

import logo from "../../assets/tmovie.png"


const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt=""/>
                        <Link to="/" children="tMovies"/>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/" children="Home"/>
                        <Link to="/" children="Contact Us"/>
                        <Link to="/" children="Term of services"/>
                        <Link to="/" children="About us"/>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/" children="Live"/>
                        <Link to="/" children="FAQ"/>
                        <Link to="/" children="Premium"/>
                        <Link to="/" children="Privacy policy"/>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/" children="You must watch"/>
                        <Link to="/" children="Recent Release"/>
                        <Link to="/" children="Top IMDB"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer