import { useDispatch, useSelector } from 'react-redux';
import { selectCountry, selectTranslation } from '../store/countries/slice';

const useCapitalForm = () => {
  const { selectedCountry, selectedTranslation } = useSelector(
    (state) => state.countries
  );
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);

  const changeCountry = (capital) => {
    const temp = countries.filter((country) => country.capital[0] === capital);
    dispatch(selectCountry(...temp));
    changeTranslationByCountry(...temp);
  };
  const changeTranslation = (translation) => {
    dispatch(selectTranslation(translation));
  };

  const changeTranslationByCountry = (country) => {
    dispatch(
      selectTranslation(
        Object.keys(country.translations)
          ? Object.keys(country.translations)[0]
          : ''
      )
    );
  };

  return {
    countries,
    changeCountry,
    changeTranslation,
    selectedCountry,
    selectedTranslation,
  };
};

export default useCapitalForm;
