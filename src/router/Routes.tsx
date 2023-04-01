import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {About, ErrorBoundary, NotFound} from 'components'
import {Dashboard, Layout, MicroApp} from 'containers'

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
          path: '/portal/*',
          element: (
            <MicroApp
              name="portal-app"
              containerId="portal-app-container"
              host="http://localhost:3302"
            />
          ),
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
