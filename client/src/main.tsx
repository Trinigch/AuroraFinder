import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import App from './App.tsx'
import Landing from './pages/Landing.tsx'
import Login from './pages/Login.tsx'
import ErrorPage from './pages/Error.tsx'
import Find from './pages/Find.tsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
            path: '/find',
            element: <Find />
        },
      ],
    },
  ]);


  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
  } 
  
