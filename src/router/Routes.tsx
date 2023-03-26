import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {About, ErrorBoundary, NotFound} from 'components'
import {Dashboard, Layout} from 'containers'

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: '/',
          element: <Dashboard />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: '/about',
          element: <About />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default Routes
