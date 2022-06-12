import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Book({ id, title, author, description }) {
  return (
    <Box gridColumn='span 3' className='book-info'>
      <Link to={`/book/${id}`}>
        <h5>{title}</h5>
      </Link>
      <h6>{author}</h6>
      <p>{description}</p>
    </Box>
  );
}

export default Book;
