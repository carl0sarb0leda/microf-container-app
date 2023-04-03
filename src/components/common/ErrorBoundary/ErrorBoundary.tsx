import React from 'react'
import {useRouteError} from 'react-router-dom'

export const ErrorBoundary = () => {
  let error = useRouteError()
  console.error(error)
  return <div>Unexpected error. Please try again</div>
}
