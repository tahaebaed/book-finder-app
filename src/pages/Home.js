import React from 'react';
import { ToastContainer } from 'react-toastify';
import BooksWrapper from '../components/BooksWrapper';
import Input from '../components/Input';

function Home() {
  return (
    <>
      <Input />
      <BooksWrapper />
      <ToastContainer position='bottom-right' />
    </>
  );
}

export default Home;
