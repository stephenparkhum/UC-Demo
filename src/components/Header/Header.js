import React from 'react';
import Nav from './Nav';
import Hero from './Hero.js';
import logo from '../../images/logo.png'

export default function Header({navigation}) {
    console.log(logo);

    return (
        <header>
            <div className="nav-container">
                <div className="nav-container-logo">
                <a href="/">
                    <img src={logo} alt="site logo"/>
                    <span className="logo-subtext">Master Planning + Urban Design + Architecture</span>
                </a>
                </div>

                <Nav navigation={navigation} />
            </div>
            <Hero />
        </header>
    )
};