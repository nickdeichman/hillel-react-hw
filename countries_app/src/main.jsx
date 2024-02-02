import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import './index.scss';
import store from './store/store.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Countries from './components/Countries/Countries.jsx';
import CapitalForm from './components/CapitalForm/CapitalForm.jsx';
import ChosenCountry from './components/ChosenCountry/ChosenCountry.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <CapitalForm /> },

      {
        path: '/countries',
        element: <Countries />,
      },
      { path: '/countries/:country-name', element: <ChosenCountry /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
