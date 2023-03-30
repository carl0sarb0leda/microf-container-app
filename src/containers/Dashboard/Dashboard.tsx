import React, {useEffect, useState} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import {Line} from 'react-chartjs-2'
import {getCovidVaccineData} from 'api/common-service'
import {ChartWrapper} from './dashboard.styled'

export const Dashboard = () => {
  const [chartData, setChartData] = useState<
    | {
        labels: string[]
        country: string
        timeline: unknown
      }[]
    | null
  >(null)
  const [isLoading, setIsLoading] = useState(false)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  )

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Covid-19 Vaccines Chart',
      },
    },
  }

  useEffect(() => {
    const fetchVaccineData = async () => {
      setIsLoading(true)
      Promise.allSettled([
        getCovidVaccineData(),
        getCovidVaccineData('NZ'),
        getCovidVaccineData('EC'),
        getCovidVaccineData('JP'),
      ]).then(responseValues => {
        setIsLoading(false)
        const errors = responseValues.filter(
          response => response.status === 'rejected',
        )
        if (errors.length) {
          alert(
            'Some data requests have failed, please try again or check the logs',
          )
        }

        const dataSet = responseValues.map(response => {
          if (response.status === 'fulfilled') {
            if ('timeline' in response.value) {
              return {
                ...response.value,
                labels: Object.keys(response.value['timeline']),
                timeline: Object.values(response.value['timeline']),
              }
            }
            return {
              country: 'Global',
              labels: Object.keys(response.value),
              timeline: Object.values(response.value),
            }
          }
          return null
        })
        setChartData(dataSet)
      })
    }

    fetchVaccineData()
  }, [])

  if (isLoading) {
    return <>Loading...</>
  }
  if (chartData) {
    return (
      <ChartWrapper>
        {chartData.map(data => {
          if (data?.timeline) {
            return (
              <Line
                key={data.country}
                options={options}
                data={{
                  labels: data.labels,
                  datasets: [
                    {
                      label: `${data.country} Doses Administered`,
                      data: data.timeline,
                      borderColor: 'rgb(53, 162, 235)',
                      backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                  ],
                }}
              />
            )
          }
          return null
        })}
      </ChartWrapper>
    )
  }
  return null
}
