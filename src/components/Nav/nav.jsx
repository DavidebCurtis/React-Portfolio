import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './nav.css';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function nav() {
  return (
    <div role='presentation' onClick={handleClick}>
      <Breadcrumbs className='nav' aria-label='breadcrumb'>
        <Link
          className='link'
          underline='hover'
          color='text.primary'
          href='#about'
          aria-current='page'
        >
          About Me
        </Link>
        <Link className='link' underline='hover' color='text.primary' href=''>
          Portfolio
        </Link>
        <Link className='link' underline='hover' color='text.primary' href=''>
          Contact
        </Link>
        <Link className='link' underline='hover' color='text.primary' href=''>
          Resume
        </Link>
      </Breadcrumbs>
    </div>
  );
}
