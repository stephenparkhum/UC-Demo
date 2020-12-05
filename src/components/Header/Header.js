import React from 'react';
import Nav from './Nav';
import Hero from './Hero.js';

export default function Header({navigation}) {
    return (
        <header>
            <Nav navigation={navigation} />
            <Hero />
        </header>
    )
};