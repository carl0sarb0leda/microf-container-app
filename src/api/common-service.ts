const baseUrl = 'https://disease.sh/v3/'

async function getCovidVaccineData(country?: string) {
  const subPath = 'covid-19/vaccine/coverage'
  const urlParams = country ? `${subPath}/countries/${country}` : subPath
  const url = new URL(urlParams, baseUrl)
  try {
    const response = await fetch(url.toString())
    if (response.ok) {
      const data = await response.json()
      return data
    }
    throw new Error('Bad response', {
      cause: {response},
    })
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = 'Unexpected error'
    console.error(message)
    throw new Error(message)
  }
}

export {getCovidVaccineData}
