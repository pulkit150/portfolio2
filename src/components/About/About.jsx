import React from 'react'
import './About.css'
import Image from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox';

const About = () => {

    const downloadResume = async()=>{
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hi, I’m Pulkit Gangil from Gwalior (M.P). I’m currently pursuing a B.Tech in Computer Science
                             and Engineering at Maulana Azad National Institute of Technology Bhopal.
                            I specialize in front-end development with a strong command of React.js, 
                            and I’m well-versed in JavaScript, HTML, and CSS. I’m passionate about building dynamic and 
                            user-friendly interfaces that deliver seamless experiences. Along with my front-end skills, I 
                            have a solid foundation in data structures and algorithms, which allows me to efficiently solve 
                            problems and optimize solutions. My consistent practice on platforms like CodeChef, LeetCode, and 
                            Codeforces has helped refine my problem-solving skills. I’m excited about working on impactful projects 
                            and collaborating with innovative thinkers to bring ideas to life. Let’s connect and build something 
                            remarkable together!
                        </p>
                        <ul className="about__list">
                            <li>C</li>
                            <li>C++</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>ReactJs</li>
                            <li>TailwindCSS</li>
                            <li>Git</li>
                            <li>Github</li>
                            <li>MongoDB</li>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About
