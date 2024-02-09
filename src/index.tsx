import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { MainLayout } from './layout/MainLayout';
import { Games } from './screens/Games';
import { Error } from './screens/Error';
import { store } from './store';
import "./index.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "games/:gamesId",
        element: <Games />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
