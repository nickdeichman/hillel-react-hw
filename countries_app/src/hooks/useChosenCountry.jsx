import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectTranslation } from '../store/countries/slice';
import thunks from '../store/countries/thunks';

const useChosenCountry = () => {
  const { selectedCountry, selectedTranslation } = useSelector(
    (state) => state.countries
  );
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const translatedCountryName = useRef(undefined);
  const [isTranslationInParams, setIsTranslationInParams] = useState(false);
  useEffect(() => {
    if (searchParams.size) {
      if (searchParams.get('translation')) {
        setIsTranslationInParams(true);
        dispatch(selectTranslation(searchParams.get('translation')));
      }
    }
  }, [searchParams]);
  useEffect(() => {
    if (selectedCountry) {
      translatedCountryName.current = selectedCountry.translations
        ? Object.keys(selectedCountry.translations).reduce(function (
            officialTranslation,
            value
          ) {
            if (value === selectedTranslation) {
              officialTranslation =
                selectedCountry.translations[value].official;
            }
            return officialTranslation;
          },
          0)
        : null;
    }
  }, [selectedCountry]);

  const deleteChosenCountry = () => {
    selectedCountry ? dispatch(thunks.deleteCountry(selectedCountry.id)) : null;
  };

  return { selectedCountry, isTranslationInParams, translatedCountryName, deleteChosenCountry };
};

export default useChosenCountry;
