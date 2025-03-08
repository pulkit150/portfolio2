import React from 'react'
import HomeSocials from './HomeSocials'
import './Home.css';
import avatar from '../../assets/avatar-4.svg';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={avatar} alt="" className='home__img' width='120' />
                <h1 className="home__name">Pulkit Gangil</h1>
                <span className="home__education">I'm a FullStack Developer</span>

                <HomeSocials/>

                <a href="#contact" className='btn'>Contact Me</a>
            </div>
            
            <Shapes/>
        </section>
    )
}

export default Home
