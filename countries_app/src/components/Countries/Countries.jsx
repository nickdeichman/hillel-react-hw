import { List } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import CountriesListItem from './CountriesListItem/CountriesListItem';
import './countries.scss'

const Countries = () => {
  const { countries } = useSelector((state) => state.countries);

  return (
    <List className='block country-list'>
      {countries.length ? countries.map((country) => <CountriesListItem key={country.id} country={country}/> ) : null}
    </List>
  )
}

export default Countries