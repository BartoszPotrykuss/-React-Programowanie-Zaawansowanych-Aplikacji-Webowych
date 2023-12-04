import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Home from './pages/Home';

function App()
{
  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  );
}

  export default App;