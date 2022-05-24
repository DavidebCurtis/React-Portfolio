import React, { useEffect } from 'react';
import './about.css';
import img from '../../assets/surfing.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMongodb } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';

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

        <div
          // data-aos-anchor='#about'
          // data-aos-anchor-placement='top-top'
          data-aos='fade-zoom-in'
          data-aos-easing='ease-in-back'
          data-aos-delay='300'
          data-aos-offset='0'
          className='skills'
        >
          <FaHtml5 size={70} />
          <FaCss3Alt size={70} />
          <IoLogoJavascript size={70} />
          <FaNodeJs size={70} />
          <FaReact size={70} />
          <SiMongodb size={70} />
          <GrMysql size={70} />
          <AiFillGithub size={70} />
        </div>
      </div>
    </div>
  );
};

export default About;
