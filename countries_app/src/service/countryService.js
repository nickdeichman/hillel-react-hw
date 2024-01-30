import axios from 'axios';
const API = `https://655655bc84b36e3a431f9829.mockapi.io/countries`;

const todos = {
  get: (id) => axios(API + (id ? `/${id}` : ``)).then(({data}) => data),
  delete: (id) => axios.delete(API + `/${id}`).then(({data}) => data),
  put: (id, obj) => axios.put(API + `/${id}`, obj).then(({data}) => data),
  post: (obj) => axios.post(API, obj).then(({data}) => data)
};

export default todos;