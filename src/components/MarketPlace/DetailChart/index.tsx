import React from 'react'
import ReactApexChart from 'react-apexcharts'
import moment from 'moment'
import {
  Container
} from './styles'

export const DetailChart:React.FC = () => {
  const series = [{
    name: "Gold",
    data: [19, 45, 13, 51, 49, 62, 69]
  },
  {
    name: "Virgin",
    data: [10, 41, 35, 41, 49, 62, 99]
  }]

  const options: any = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#18E7D9', '#EDCD24'],
    stroke: {
      curve: 'straight',
      width: 2
    },
    grid: {
      row: {
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ["2021-11-12T00:00:00.000Z", "2021-11-13T01:30:00.000Z", "2021-11-14T02:30:00.000Z", "2021-11-15T03:30:00.000Z", "2021-11-16T01:30:00.000Z", "2021-11-17T02:30:00.000Z", "2021-11-18T03:30:00.000Z"],
      labels: {
        show: true,
        style: {
            colors: ['#86C89A'],
            fontSize: '10px',
        },
        axisBorder: {
          show: true,
          color: '#ffffff4d',
          height: 1,
          width: '100%',
        },
        formatter: function(value: any, timestamp: any, opts: any) {
          return moment(value).format('MM/DD')
        }
      },
    },
    yaxis: {
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    },
    legend: {
      show: false
    },
    theme: {
      mode: 'dark'
    }
  }

  return (
    <Container>
      <ReactApexChart options={options} series={series} type="line" />
    </Container>
  )
}