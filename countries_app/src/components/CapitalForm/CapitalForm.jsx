import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useCapitalForm from '../../hooks/useCapitalForm';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { COUNTRY_PATH } from './../../constants/constants';

const CapitalForm = () => {
  const {
    countries,
    changeCountry,
    changeTranslation,
    selectedTranslation,
    selectedCountry,
  } = useCapitalForm();

  const handleCountryChange = (value) => changeCountry(value);
  const handleTranslationChange = (value) => changeTranslation(value);
  return (
    <section className='block capital-form'>
      <h3 className='capital-form__heading'>Capital Form</h3>
      <FormControl fullWidth>
        <InputLabel id={'select_capital'}>Country</InputLabel>
        <Select
          onChange={(e) => handleCountryChange(e.target.value)}
          labelId='select_capital'
          value={selectedCountry.capital ? selectedCountry.capital[0] : ''}
          label='Country'
        >
          {countries.length
            ? countries.map((country) => (
                <MenuItem
                  key={country.id}
                  value={country.capital[0]}
                >{`${country.flag}  ${country.capital[0]}`}</MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id={'select_translation'}>Translation</InputLabel>
        <Select
          onChange={(e) => handleTranslationChange(e.target.value)}
          labelId='select_translation'
          value={selectedTranslation ? selectedTranslation : ''}
          label='Translation'
        >
          {selectedCountry
            ? Object.keys(selectedCountry.translations)
              ? Object.keys(selectedCountry.translations).map(
                  (translation, index) => {
                    return (
                      <MenuItem key={index} value={translation}>
                        {translation}
                      </MenuItem>
                    );
                  }
                )
              : null
            : null}
        </Select>
        <Link
          to={`${COUNTRY_PATH}${
            selectedCountry
              ? `${selectedCountry.name.official}?translation=${selectedTranslation}`
              : '/'
          }`}
        >
          <Button
            className={'capital-form__btn'}
            title={`Read more about ${
              selectedCountry ? selectedCountry.name.official : ' loading..'
            }`}
          />
        </Link>
      </FormControl>
    </section>
  );
};

export default CapitalForm;
