import React, { useEffect } from 'react';
import './header.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import blob from '../../assets/blob.svg';
import Me from '../../assets/me.png';

const Header = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 5000 });
  // }, []);

  return (
    <div className='header'>
      <div data-aos='fade-right' className='h-left'>
        <div className='left-container'>
          <h2 className='greeting'>Hello, my name is </h2>
          <h2 className='name'>David Curtis</h2>
          <h3 className='title'>Full Stack Web Developer</h3>
          <div className='description'>
            I enjoy designing and developing modern UIs. With a keen eye for out
            of the box design and evergrowing knowledge of best design
            principles I've created many sophisticated modern websites and web
            services. Check out my work bellow.
          </div>
        </div>
      </div>
      <div className='h-right'>
        <div className='img-container'>
          <div className='shape'></div>
          <img className='me' src={Me}></img>
          {/* <img data-aos='fade' className='me' src={Me}></img> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
