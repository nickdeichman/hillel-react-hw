import React, { useEffect } from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { useDispatch } from 'react-redux';
import thunks from '../../store/countries/thunks';
import { Container } from '@mui/material';
import {
  selectDefaultCapital,
  selectDefaultTranslation,
} from '../../store/countries/slice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(thunks.setCountries());
      dispatch(selectDefaultCapital());
      dispatch(selectDefaultTranslation());
    })();
  }, []);

  return (
    <Container className='container' maxWidth='sm'>
      <Navigation />
      <Home />
      <Outlet></Outlet>
    </Container>
  );
};

export default App;
