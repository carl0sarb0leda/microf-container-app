import React, {useCallback, useEffect, useMemo, useState} from 'react'

type MicroAppProps = {
  name: string
  containerId: string
  host: string
  params?: object
}
export const MicroApp = ({name, containerId, host, params}: MicroAppProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [appError, setAppError] = useState<string | null>(null)

  const scriptId = useMemo(() => `micro-app-script-${name}`, [name])

  const mountApp = useCallback(() => {
    const microAppObj = (window as any)[name]
    if (microAppObj?.mount) {
      microAppObj.mount(containerId, params)
      setIsLoaded(true)
    } else {
      const errorMessage = `Failed to mount ${name}, please try again.`
      console.error(errorMessage)
      setAppError(errorMessage)
    }
  }, [containerId, name, params])

  const getStaticRoute = (fileRoute: string) => {
    const staticRoute = fileRoute.split('static').slice(-1)
    return `/static${staticRoute}`
  }

  useEffect(() => {
    const bootstrapApp = async () => {
      fetch(`${host}/asset-manifest.json`)
        .then(response => response.json())
        .then(manifest => {
          //load css
          const loadCss = new Promise<void>((resolve, reject) => {
            const cssFile = manifest.files['main.css']
            if (cssFile) {
              const cssLink = document.createElement('link')
              cssLink.href = `${host}${getStaticRoute(cssFile)}`
              cssLink.rel = 'stylesheet'
              cssLink.onload = () => {
                resolve()
              }
              document.head.appendChild(cssLink)
            } else reject('css file not found')
          })
          //load js
          const loadScript = new Promise<void>((resolve, reject) => {
            const jsFile = manifest.files['main.js']
            if (jsFile) {
              const script = document.createElement('script')
              script.id = scriptId
              script.crossOrigin = ''
              const appJs = `${host}${getStaticRoute(jsFile)}`
              script.src = appJs
              script.onload = () => {
                resolve()
              }
              document.head.appendChild(script)
            } else reject('js file not found')
          })
          Promise.allSettled([loadCss, loadScript]).then(responses => {
            //app can be mounted without css
            const errors = responses.filter(
              response => response.status === 'rejected',
            )
            if (errors.length) console.table(errors)

            setIsLoaded(true)
          })
        })
        .catch(error => {
          console.error(error)
          setAppError(`Failed to fetch ${name}, please try again`)
        })
    }

    let AppScript = document.getElementById(scriptId)
    if (AppScript) mountApp()
    else bootstrapApp()

    //Cleanup mechanism
    return () => {
      const microAppObj = (window as any)[name]
      if (microAppObj?.unMount) microAppObj.unMount(containerId)
    }
  }, [containerId, host, name, scriptId, mountApp])

  useEffect(() => {
    if (isLoaded) mountApp()
  }, [isLoaded, mountApp])

  if (appError) {
    return <>{appError}</>
  }

  if (!isLoaded) {
    return <>Loading...</>
  }

  return <main id={containerId} />
}
