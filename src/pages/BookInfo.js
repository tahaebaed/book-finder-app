import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchBookResQuest } from '../store/book/actions';

function BookInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookResQuest(id));
  }, [dispatch, id]);
  const book = useSelector(state => state.book);
  return book === 'loading' ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <h1>{book?.volumeInfo.title}</h1>

      <div
        className='book-details_info-component'
        dangerouslySetInnerHTML={{ __html: book?.volumeInfo.description }}
        style={{ textAlign: 'start' }}
      />
      <Link to='/'>
        <Button aria-label='previous' variant='contained'>
          Home
        </Button>
      </Link>
    </div>
  );
}

export default BookInfo;
