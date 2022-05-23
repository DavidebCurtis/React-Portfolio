import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import './nav.css';

function handleClick(event) {
  // event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function nav() {
  return (
    <div role='presentation' onClick={handleClick}>
      <Breadcrumbs className='nav' aria-label='breadcrumb'>
        <a
          className='link'
          underline='hover'
          color='text.primary'
          href='#about'
          aria-current='page'
        >
          About Me
        </a>
        <a
          className='link'
          underline='hover'
          color='text.primary'
          href='#projects'
        >
          Projects
        </a>
        <a
          className='link'
          underline='hover'
          color='text.primary'
          href='#contact'
        >
          Contact
        </a>
        <a
          className='link'
          underline='hover'
          color='text.primary'
          href='#resume'
        >
          Resume
        </a>
      </Breadcrumbs>
    </div>
  );
}
