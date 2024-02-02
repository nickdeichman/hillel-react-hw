import React from 'react';
import ChosenCountryList from './ChosenCountryList/ChosenCountryList';
import useChosenCountry from '../../hooks/useChosenCountry';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const ChosenCountry = () => {
  const { selectedCountry, isTranslationInParams, translatedCountryName, handleDeleteCountryClick } =
    useChosenCountry();
  return (
    <>
      <section className='block chosen-country'>
        <h2 className='chosen-country__heading'>
          {selectedCountry
            ? isTranslationInParams
              ? translatedCountryName.current
              : selectedCountry.name['official']
            : null}
        </h2>
        <ChosenCountryList data={selectedCountry} />
        <Button className={'chosen-country__delete-btn'} title='Delete country' />
      </section>
      <Link  className='chosen-country-back__link' to={'/countries'}>
        <Button onClick={handleDeleteCountryClick} className={'chosen-country__back-btn'} title={'Back to Countries'}/>
      </Link>
    </>
  );
};

export default ChosenCountry;
