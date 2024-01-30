import React, { useEffect } from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import useCountries from '../../hooks/useCountries';
import { useDispatch } from 'react-redux';
import thunks from '../../store/countries/thunks';
import { Container } from '@mui/material';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunks.setCountries());
  }, []);

  return (
    <Container className='container' maxWidth='sm' >
      <Navigation />
      <Home />
      <Outlet></Outlet>
    </Container>
  );
};

export default App;
