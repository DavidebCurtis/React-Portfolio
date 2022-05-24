import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './contact.css';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    emailjs
      .send(
        'service_y8dsz1j',
        'template_ldsvefv',
        formState,
        'oiZEJkT-wcxZcf_OF'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <section id='contact' className='contact'>
      <div className='title-wrapper'>
        <h1 className='contact-me'>Contact me</h1>
        <p className='questions'>
          Any questions or remarks? Just send me a message!
        </p>
      </div>
      <div className='l-r-wrapper'>
        <div className='c-left'>
          <div class='c-inside'>
            <div class='contact-info'>
              <h3 className='c-quick'>QUICK CONTACT</h3>
              <p className='fast'>
                Fill out the form and I'll get back to you. Or get in touch
                right away!
              </p>
              <ul>
                <li>
                  <FaPhoneAlt className='c-icon' size={24} />
                  <a className='c-quick-link' href='tel:3362099503'>
                    336-209-9503
                  </a>
                </li>
                <li>
                  <MdEmail className='c-icon' size={24} />
                  <a
                    className='c-quick-link'
                    href='mailto:davidebcurtis@gmail.com'
                  >
                    davidebcurtis@gmail.com
                  </a>
                </li>
                <li>
                  <MdLocationOn className='c-icon' size={24} />
                  Winston-Salem NC, 27103
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='c-right'>
          {/* <h1 className='c-title'>Contact me</h1> */}
          <form id='contact-form' onSubmit={handleSubmit}>
            <div className='c-name'>
              <input
                type='text'
                defaultValue={name}
                onChange={handleChange}
                name='name'
                placeholder='Name'
              />
            </div>
            <div className='c-email'>
              <input
                type='email'
                defaultValue={email}
                name='email'
                onChange={handleChange}
                placeholder='Email address'
              />
            </div>
            <div className='c-message'>
              <textarea
                name='message'
                defaultValue={message}
                onChange={handleChange}
                rows='5'
                placeholder='Message'
              />
            </div>
            {errorMessage && (
              <div>
                <p className='error-text'>{errorMessage}</p>
              </div>
            )}
            <button className='email-submit' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
