import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BooksWrapper() {
  const books = useSelector(state => state.books);

  return books ? (
    <Box
      display='grid'
      gridTemplateColumns='repeat(12, 1fr)'
      gap={2}
      className='books-wrapper'
    >
      {books.map(({ id, selfLink, volumeInfo }) => (
        <Book
          title={volumeInfo.title}
          author={volumeInfo.author}
          url={selfLink}
          description={volumeInfo.description}
          id={id}
          key={id}
        />
      ))}
    </Box>
  ) : (
    <p>Please enter something to search</p>
  );
}

export default BooksWrapper;
