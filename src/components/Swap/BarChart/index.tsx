import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  Container
} from './styles';

export const BarChart:React.FC = () => {
  const series = [{
    name: 'Gold',
    data: [44, 55, 41]
  }]

  const options: any = {
    chart: {
      type: 'bar',
      width: '100%',
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: '10px'
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      categories: [2020, 2021, 2022],
    },
    yaxis: {
      tickAmount: 1,
      floating: false,
    
      labels: {
        show: false
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 0,
        gradientToColors: ['#82BCEF', '#1780E0'],
      },
    },
    tooltip: {
      
    },
    grid: {
      show: false,
    },
    colors: ['#82BCEF', '#1780E0'],
    theme: {
      mode: 'dark'
    }
  }

  return (
    <Container>
      <ReactApexChart options={options} series={series} type='bar' />
    </Container>
  )
};
