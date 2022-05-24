import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './contact.css';
import emailjs from '@emailjs/browser';

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
      <div className='c-left'>
        <div class='col-lg-10'>
          <div class='contact-info'>
            <h3 className='c-quick'>QUICK CONTACT</h3>
            <ul>
              <li>
                <span>Phone: </span>
                <a className='c-quick-link' href='tel:3362099503'>
                  336-209-9503
                </a>
              </li>
              <li>
                <span>Email: </span>
                <a
                  className='c-quick-link'
                  href='mailto:davidebcurtis@gmail.com'
                >
                  davidebcurtis@gmail.com
                </a>
              </li>
              <li>
                <span>Location: </span>Winston-Salem NC, 27103
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='c-right'>
        <h1 className='c-title'>Contact me</h1>
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
    </section>
  );
}

export default ContactForm;
