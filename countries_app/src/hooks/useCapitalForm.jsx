import { useDispatch, useSelector } from 'react-redux';
import { selectCountry, selectTranslation } from '../store/countries/slice';

const useCapitalForm = () => {
  const { selectedCountry, selectedTranslation } = useSelector(
    (state) => state.countries
  );
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);

  const handleCapitalChange = (capital) => {
    dispatch(selectCountry(capital));
    changeTranslationByCountry(capital);
  };
  const handleTranslationChange = (translation) => {
    dispatch(selectTranslation(translation));
  };

  const changeTranslationByCountry = (capital) => {
    dispatch(
      selectTranslation(
        Object.keys(capital.translations)
          ? Object.keys(capital.translations)[0]
          : ''
      )
    );
  };

  return {
    countries,
    handleCapitalChange,
    handleTranslationChange,
    selectedCountry,
    selectedTranslation,
  };
};

export default useCapitalForm;
