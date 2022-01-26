import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss';
import Arrow from '../../assets/arrow-down.png';

function Home() {
    return (
        <section className='sectionHome'>
            <div className='sectionHome--container'>
                <div className='sectionHome--container__text'>
                    <h1>HELLO! I'M RODRIGO LESCANO</h1>
                    <h2>I'm an IT enthusiast based in Buenos Aires, Argentina.</h2>
                    <p>Scroll down and get to know me!</p>
                    <Link to="/about-me" className='sectionHome--container__link'>
                        <img src={Arrow} alt='down' />
                        {/*Animación*/}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Home
