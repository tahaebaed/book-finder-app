import { Search } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleFetchAllBookCall } from '../store/books/actions';

function Input() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmitSearch = e => {
    e.preventDefault();
    dispatch(handleFetchAllBookCall(query));
  };

  return (
    <form onSubmit={handleSubmitSearch}>
      <TextField
        label='search'
        variant='outlined'
        placeholder='Please write what do you want to search'
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }}
        mx={5}
      />
      <IconButton aria-label='search' type='submit'>
        <Search />
      </IconButton>
    </form>
  );
}

export default Input;
