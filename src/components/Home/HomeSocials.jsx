import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode, SiCodeforces, SiLeetcode, SiCodechef } from 'react-icons/si'

const HomeSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/pulkit150?tab=repositories' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/pulkit-gangil-a5b939288/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://codeforces.com/profile/pulkitgangil1504' className='home__social-link' target='__blank' rel='noreferrer'>
                <SiCodeforces />
            </a>

            <a href='https://leetcode.com/u/pulkit04/' className='home__social-link' target='__blank' rel='noreferrer'>
                <SiLeetcode />
            </a>

            <a href='https://www.codechef.com/users/pulkit_1504' className='home__social-link' target='__blank' rel='noreferrer'>
                <SiCodechef />
            </a>
        </div>
    )
}

export default HomeSocials
