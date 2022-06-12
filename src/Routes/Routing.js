import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BookInfo, Home } from './lazyLoading';

function Routing() {
  return (
    <React.Suspense fallback={<h5>Loading...</h5>}>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/book/:id' element={<BookInfo />} />
        <Route path='*' element={<p>This page not Found 404 error</p>} />
      </Routes>
    </React.Suspense>
  );
}

export default Routing;
