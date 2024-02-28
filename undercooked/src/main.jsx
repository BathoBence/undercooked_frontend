import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import Layout from "./Pages/Layout/Layout";
import Home from './Pages/Home/Home';
import Ingredients from './Pages/Ingredients/Ingredients';
import RecipeList from './Pages/RecipeList/RecipeList';
import RecipePage from './Pages/RecipePage/RecipePage';
import Welcome from './Pages/Login/Login';
import LoginPage from './Pages/Login/Login';
import RegistationPage from './Pages/Registration/Registation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegistationPage />
      },
      {
        path: '/ingredients',
        element: <Ingredients />
      },
      {
        path: '/recipes',
        element: <RecipeList />
      },
      {
        path: '/recipes/:id',
        element: <RecipePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

