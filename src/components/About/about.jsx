import React, { useEffect } from 'react';
import './about.css';
import img from '../../assets/surfing.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id='about'>
      <div className='left'>
        <div className='img-card'>
          <img
            data-aos='fade-up'
            id='surfing'
            src={img}
            alt='David Curtis Surfing'
          />
        </div>
      </div>
      <div data-aos='fade-down' className='right'>
        <h1 className='title'>About Me</h1>
        <p className='description'>
          I transistioned in to an IT career a little over a year ago. Upon
          entering this new field I found a love for computers yes, but more so
          how applications are built and run. I am currently enrolled in the UNC
          bootcamp to further my knowledge of web based applications. If I'm not
          cooped up coding you can always find me out fishing, hitting a new
          mountain bike trail, or maybe even shreding a wave or two.
        </p>
      </div>
    </div>
  );
};

export default About;
