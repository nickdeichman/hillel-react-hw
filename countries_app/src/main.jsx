import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import './index.scss';
import store from './store/store.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Countries from './components/Countries/Countries.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/countries', 
        element: <Countries />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
