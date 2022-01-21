import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section>
            <h1>Hello! I'm Rodrigo Lescano</h1>
            <h2>I'm an IT enthusiast based in Buenos Aires, Argentina.</h2>
            <p>Scroll down and get to know me!</p>
            <Link to="/about-me">
                {/*Animación*/}
            </Link>
        </section>
    )
}

export default Home
