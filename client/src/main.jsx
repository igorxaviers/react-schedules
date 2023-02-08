import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home'
import Schedule from './routes/Schedule'
import ErrorPage from './routes/ErrorPage'
import ScheduleDetail from './routes/ScheduleDetail'
import Search from './routes/Search'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//   },
//   {
//     path: '/home',
//     element: <Home/>,
//   }
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/schedule',
        element: <Schedule/>,
      },
      {
        path: '/schedule/:id',
        element: <ScheduleDetail/>,
      },
      {
        path: '/search',
        element: <Search/>,
      }
    ]}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
