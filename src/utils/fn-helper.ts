import {redirect} from 'react-router-dom'

export const customLoader = async () => {
  //validation for gh-pages deployment
  const pathname = window.location.pathname
  console.log({pathname})
  if (pathname === '/microf-container-app') return redirect('/')
  return null
}
