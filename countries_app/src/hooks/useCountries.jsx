import { useSelector } from 'react-redux';

const useCountries = () => {
  const { countries } = useSelector((state) => state.countries);

  return { countries };
};

export default useCountries;
