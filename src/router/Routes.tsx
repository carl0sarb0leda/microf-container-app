import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {About, ErrorBoundary, NotFound} from 'components'
import {Dashboard, Layout, MicroApp} from 'containers'
import {PortalApp} from 'lib/constants'
import {customLoader} from 'utils/fn-helper'

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
              name={PortalApp.NameSpace}
              containerId={PortalApp.ContainerId}
              host={PortalApp.Host}
            />
          ),
          errorElement: <ErrorBoundary />,
        },
        {
          path: '*',
          element: <NotFound />,
          loader: customLoader,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default Routes
