import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {ErrorBoundary, NotFound} from 'components'
import {Dashboard} from 'containers'

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])
  return <RouterProvider router={router} />
}

export default Routes
